// Shared menu data helpers. Pure functions only — used by menu.astro and the
// src/components/menu/* components so parsing/formatting logic lives in one place.

export function formatPrice(str) {
  if (!str) return str;
  return str.replace(/\d+/g, (n) => Number(n).toLocaleString('en-US'));
}

export function priceSegments(price) {
  if (!price) return [];
  return price.split(' / ').map((seg) => {
    const i = seg.indexOf(': ');
    const label = i === -1 ? '' : seg.slice(0, i).trim();
    const raw = i === -1 ? seg.trim() : seg.slice(i + 2).trim();
    return { label, price: formatPrice(raw) };
  });
}

export function isVerifiedImage(item) {
  return item?.imageStatus === 'verified' && Boolean(item?.image);
}

export function categorySlug(name) {
  return String(name)
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function withSectionIds(categories) {
  return categories.map((c) => ({
    ...c,
    id: `cat-${categorySlug(c.name)}`,
  }));
}

export function findItem(categories, categoryName, itemName) {
  const cat = categories.find((c) => c.name === categoryName);
  const item = cat?.items?.find((i) => i.name === itemName);
  if (!item) return null;
  return { ...item, category: cat.name, urdu: cat.urdu, note: cat.note ?? '' };
}

export function flattenMenuItems(categories) {
  return categories.flatMap((cat) =>
    (cat.items ?? []).map((item) => ({
      ...item,
      category: cat.name,
      urdu: cat.urdu ?? '',
      note: cat.note ?? '',
    })),
  );
}

export function auditMenuImages(categories) {
  const rows = flattenMenuItems(categories).map((item) => ({
    id: item.id,
    name: item.name,
    category: item.category,
    imageStatus: item.imageStatus,
    image: item.image || '',
    imageSource: item.imageSource,
  }));
  return {
    total: rows.length,
    verified: rows.filter((r) => r.imageStatus === 'verified').length,
    needsReview: rows.filter((r) => r.imageStatus !== 'verified'),
    rows,
  };
}
