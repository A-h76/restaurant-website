// Post-build step: computes sha256 hashes for every inline <script type="module">
// block Astro emits directly into the HTML (no src attribute), and writes a
// CSP header into dist/serve.json with those hashes allowlisted instead of
// falling back to 'unsafe-inline'.
//
// Why this exists: Astro inlines a handful of small per-page component
// scripts (mobile menu toggle, back-to-top, category-nav scroll) directly
// into the HTML rather than extracting them to external files. A strict
// script-src 'self' would silently break all three. Hashing them keeps the
// CSP strict without guessing or granting a blanket 'unsafe-inline'.
//
// Regenerated on every `npm run build` (wired as "postbuild"), so it never
// goes stale when a script's content changes.

import { readFile, writeFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname.replace(/^\/([a-zA-Z]:)/, '$1');
const SERVE_JSON = join(DIST, 'serve.json');

async function findHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await findHtmlFiles(full)));
    else if (entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

function extractInlineScripts(html) {
  const scripts = [];
  const re = /<script(?![^>]*\bsrc=)(?:(?!type=)[^>])*(?:type="module")?[^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html))) {
    const body = m[1].trim();
    // Skip JSON-LD structured data — it's data, not executable script, and
    // isn't gated by script-src's hash mechanism the same way.
    if (body && !m[0].includes('application/ld+json')) scripts.push(body);
  }
  return scripts;
}

const htmlFiles = await findHtmlFiles(DIST);
const hashes = new Set();

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf-8');
  for (const script of extractInlineScripts(html)) {
    const hash = createHash('sha256').update(script, 'utf-8').digest('base64');
    hashes.add(`'sha256-${hash}'`);
  }
}

const scriptSrc = ["'self'", ...hashes].join(' ');

const csp = [
  "default-src 'self'",
  `script-src ${scriptSrc}`,
  "style-src 'self' https://fonts.googleapis.com",
  "font-src https://fonts.gstatic.com",
  "img-src 'self' data:",
  // maps.google.com/maps?...&output=embed redirects to www.google.com/maps
  // for the actual embedded content — both are needed, verified by loading
  // the embed under CSP enforcement and observing the frame-src violation.
  "frame-src https://maps.google.com https://www.google.com",
  "connect-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
].join('; ');

const serveConfig = JSON.parse(await readFile(SERVE_JSON, 'utf-8'));
const rootHeaders = serveConfig.headers.find((h) => h.source === '**');
const existing = rootHeaders.headers.find((h) => h.key === 'Content-Security-Policy');
if (existing) existing.value = csp;
else rootHeaders.headers.push({ key: 'Content-Security-Policy', value: csp });

await writeFile(SERVE_JSON, JSON.stringify(serveConfig, null, 2) + '\n');

console.log(`[generate-csp] ${hashes.size} inline script hash(es) allowlisted, CSP written to dist/serve.json`);
