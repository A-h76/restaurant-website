// Run: node scripts/check-parchi.mjs — every real menu item must yield usable
// options, and the WhatsApp message must add up.
import assert from 'node:assert/strict';
import { sizeOptions, orderTotals, orderMessage } from '../src/lib/parchi.js';
import { allMenuCategories } from '../src/data/menu-catalog.js';

// Known shapes from the catalogue.
assert.deepEqual(sizeOptions('Half: ₨2000 / Full: ₨3800').map((o) => [o.label, o.price]), [['Half', 2000], ['Full', 3800]]);
assert.deepEqual(sizeOptions('₨500').map((o) => [o.label, o.price]), [['', 500]]);
assert.deepEqual(sizeOptions('Full: ₨4000').map((o) => [o.label, o.price]), [['Full', 4000]]);
assert.deepEqual(sizeOptions('₨1500/KG').map((o) => [o.label, o.price]), [['per kg', 1500]]);
assert.deepEqual(sizeOptions('2 Pcs: ₨650 / 4 Pcs: ₨1200').map((o) => o.price), [650, 1200]);
assert.deepEqual(sizeOptions(null, 'Sizes available — M: ₨1150 / L: ₨1750').map((o) => [o.label, o.price]), [['M', 1150], ['L', 1750]]);
// Unlabelled multi-price: never guess which is which.
const amb = sizeOptions('₨500 / ₨400');
assert.equal(amb.length, 1);
assert.equal(amb[0].price, null);

// Every real item has at least one option, and priced options are positive integers.
let n = 0;
let unpriced = [];
for (const c of allMenuCategories()) {
  for (const i of c.items) {
    n++;
    const opts = sizeOptions(i.price, c.note);
    assert.ok(opts.length >= 1, `${i.id} has no options`);
    for (const o of opts) {
      assert.ok(o.price === null || Number.isInteger(o.price), `${i.id} bad price`);
      if (o.price === null) unpriced.push(i.id);
    }
  }
}

// Totals + message.
const lines = [
  { name: 'Mutton Karahi', label: 'Full', price: 3800, qty: 2 },
  { name: 'Malai Roll', label: '', price: null, qty: 1 },
];
assert.deepEqual(orderTotals(lines), { total: 7600, toConfirm: 1, count: 3 });
const msg = orderMessage(lines);
assert.match(msg, /2 × Mutton Karahi \(Full\) — ₨7,600/);
assert.match(msg, /1 × Malai Roll — price to confirm/);
assert.match(msg, /Estimated total: ₨7,600 \+ 1 item to confirm/);

console.log(`parchi ok — ${n} dishes, items needing a phone confirm: ${[...new Set(unpriced)].join(', ') || 'none'}`);
