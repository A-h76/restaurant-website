// Run: node scripts/check-prayer.mjs — sanity-checks the prayer calculator
// against typical Punjab (Pakistan) timetable windows for 4 Nov and 21 Jun.
import { prayerTimes, prayerState, fmtClock } from '../src/lib/prayer.js';
import assert from 'node:assert/strict';

const within = (v, lo, hi, label) => assert.ok(v >= lo && v <= hi, `${label} ${fmtClock(v)} outside ${fmtClock(lo)}–${fmtClock(hi)}`);
const hm = (h, m) => h * 60 + m;

const nov = prayerTimes(2026, 11, 4);
within(nov.fajr, hm(4, 55), hm(5, 15), 'nov fajr');
within(nov.dhuhr, hm(11, 45), hm(11, 56), 'nov dhuhr');
within(nov.asr, hm(15, 30), hm(15, 50), 'nov asr (hanafi)');
within(nov.maghrib, hm(17, 10), hm(17, 26), 'nov maghrib');
within(nov.isha, hm(18, 30), hm(18, 52), 'nov isha');

const jun = prayerTimes(2026, 6, 21);
within(jun.fajr, hm(3, 25), hm(4, 10), 'jun fajr');
within(jun.maghrib, hm(19, 5), hm(19, 25), 'jun maghrib');

// 02:00 PKT -> Fajr is next; 23:50 PKT -> tomorrow's Fajr, not undefined.
const at = (h, m) => Date.UTC(2026, 10, 4, h - 5, m);
assert.equal(prayerState(at(2, 0)).next.key, 'fajr');
const late = prayerState(at(23, 50));
assert.equal(late.next.key, 'fajr');
assert.ok(late.minsLeft > 0 && late.minsLeft < 600, 'after-isha countdown');
assert.equal(prayerState(at(11, 55)).active?.key, 'dhuhr');
console.log('prayer ok', Object.fromEntries(Object.entries(nov).map(([k, v]) => [k, fmtClock(v)])));
