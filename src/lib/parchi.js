// Parchi (order slip) logic: turn a dish's messy price string into tappable
// size options, and a built-up order into a ready-to-send WhatsApp message.
// Pure functions only — the page script and scripts/check-parchi.mjs share them.
import { priceSegments, formatPrice } from './menu.js';

const digits = (s) => {
  const n = Number(String(s).replace(/[^\d]/g, ''));
  return Number.isFinite(n) && n > 0 ? n : null;
};

/**
 * Size options for one dish. Sizes can live on the dish ("Half: ₨2000 / Full: ₨3800")
 * or on its category note ("Sizes available — M: ₨1150 / L: ₨1750").
 * -> [{ label, price|null, raw }]  (price null = "confirm by phone")
 */
export function sizeOptions(price, note = '') {
  const src = price || String(note || '').replace(/^.*—\s*/, '');
  const segs = priceSegments(src);
  if (!segs.length) return [{ label: '', price: null, raw: '' }];

  if (segs.length === 1) {
    const perKg = /\/\s*kg/i.test(src);
    return [{ label: perKg ? 'per kg' : segs[0].label, price: digits(segs[0].price), raw: segs[0].price }];
  }
  // Several prices, every one labelled: each is its own option.
  if (segs.every((s) => s.label)) return segs.map((s) => ({ label: s.label, price: digits(s.price), raw: s.price }));
  // Several UNlabelled prices (e.g. "₨500 / ₨400"): we can't tell which is which — don't guess.
  return [{ label: '', price: null, raw: formatPrice(src) }];
}

export const rs = (n) => `₨${n.toLocaleString('en-US')}`;

/** lines: [{ name, label, price|null, qty }] */
export function orderTotals(lines) {
  let total = 0;
  let toConfirm = 0;
  let count = 0;
  for (const l of lines) {
    count += l.qty;
    if (l.price == null) toConfirm += 1;
    else total += l.price * l.qty;
  }
  return { total, toConfirm, count };
}

export function orderMessage(lines) {
  const { total, toConfirm } = orderTotals(lines);
  const rows = lines.map((l) => {
    const what = `${l.qty} × ${l.name}${l.label ? ` (${l.label})` : ''}`;
    return l.price == null ? `${what} — price to confirm` : `${what} — ${rs(l.price * l.qty)}`;
  });
  const est = `Estimated total: ${rs(total)}${toConfirm ? ` + ${toConfirm} item${toConfirm > 1 ? 's' : ''} to confirm` : ''}`;
  return [
    "Assalam o Alaikum! I'd like to order from Smart Cook Dera:",
    '',
    ...rows,
    '',
    est,
    '',
    'Please confirm availability and the final total. Thank you!',
  ].join('\n');
}
