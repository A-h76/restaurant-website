// Offline prayer-time calculator (praytimes.org algorithm), tuned for Pakistan:
// Karachi method (Fajr/Isha 18°), Hanafi Asr (shadow factor 2), PKT = UTC+5.
// Arifwala coordinates. Output is APPROXIMATE (±2 min) — the Imam's jamaat
// times at the mosque are the authority, and the UI says so.
// ponytail: fixed Karachi/Hanafi/PKT; add a method switch only if reused outside Pakistan.

const LAT = 30.29;
const LNG = 73.06;
const TZ = 5;

const R = Math.PI / 180;
const sin = (d) => Math.sin(d * R);
const cos = (d) => Math.cos(d * R);
const tan = (d) => Math.tan(d * R);
const asin = (x) => Math.asin(x) / R;
const acos = (x) => Math.acos(x) / R;
const atan2 = (y, x) => Math.atan2(y, x) / R;
const arccot = (x) => Math.atan(1 / x) / R;
const fix = (a, b) => ((a % b) + b) % b;

function julian(y, m, d) {
  if (m <= 2) { y -= 1; m += 12; }
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524.5;
}

function sun(jd) {
  const D = jd - 2451545;
  const g = fix(357.529 + 0.98560028 * D, 360);
  const q = fix(280.459 + 0.98564736 * D, 360);
  const L = fix(q + 1.915 * sin(g) + 0.02 * sin(2 * g), 360);
  const e = 23.439 - 0.00000036 * D;
  const RA = atan2(cos(e) * sin(L), cos(L)) / 15;
  return { decl: asin(sin(e) * sin(L)), eqt: q / 15 - fix(RA, 24) };
}

/** Prayer times in minutes after local (PKT) midnight for a calendar day. */
export function prayerTimes(year, month, day) {
  const jd = julian(year, month, day) - LNG / 360;
  const noon = (t) => fix(12 - sun(jd + t).eqt, 24);
  const angleTime = (angle, t, ccw) => {
    const { decl } = sun(jd + t);
    const h = acos((-sin(angle) - sin(decl) * sin(LAT)) / (cos(decl) * cos(LAT))) / 15;
    return noon(t) + (ccw ? -h : h);
  };
  const asr = (t) => {
    const { decl } = sun(jd + t);
    return angleTime(-arccot(2 + tan(Math.abs(LAT - decl))), t);
  };

  // Two passes: the first refines the guess times the second one evaluates the sun at.
  let t = { fajr: 5, dhuhr: 12, asr: 13, maghrib: 18, isha: 18 };
  for (let i = 0; i < 2; i++) {
    t = {
      fajr: angleTime(18, t.fajr / 24, true),
      dhuhr: noon(t.dhuhr / 24),
      asr: asr(t.asr / 24),
      maghrib: angleTime(0.833, t.maghrib / 24),
      isha: angleTime(18, t.isha / 24),
    };
  }
  const shift = TZ - LNG / 15;
  const out = {};
  for (const k in t) out[k] = Math.round((t[k] + shift) * 60);
  return out;
}

export const PRAYERS = [
  { key: 'fajr', name: 'Fajr', urdu: 'فجر' },
  { key: 'dhuhr', name: 'Dhuhr', urdu: 'ظہر' },
  { key: 'asr', name: 'Asr', urdu: 'عصر' },
  { key: 'maghrib', name: 'Maghrib', urdu: 'مغرب' },
  { key: 'isha', name: 'Isha', urdu: 'عشاء' },
];

/** Current Pakistan wall-clock regardless of the visitor's device timezone. */
export function pktNow(nowMs = Date.now()) {
  const d = new Date(nowMs + TZ * 3600e3);
  return { y: d.getUTCFullYear(), m: d.getUTCMonth() + 1, d: d.getUTCDate(), min: d.getUTCHours() * 60 + d.getUTCMinutes() + d.getUTCSeconds() / 60 };
}

/** Where we are in the day: today's times, the upcoming prayer, minutes until it, and whether one just started. */
export function prayerState(nowMs = Date.now(), windowMin = 20) {
  const n = pktNow(nowMs);
  const times = prayerTimes(n.y, n.m, n.d);
  const upcoming = PRAYERS.find((p) => times[p.key] > n.min);
  const current = [...PRAYERS].reverse().find((p) => times[p.key] <= n.min && n.min - times[p.key] < windowMin);
  let next = upcoming, minsLeft;
  if (upcoming) {
    minsLeft = times[upcoming.key] - n.min;
  } else {
    // After Isha: tomorrow's Fajr.
    const tm = pktNow(nowMs + 86400e3);
    next = PRAYERS[0];
    minsLeft = 1440 - n.min + prayerTimes(tm.y, tm.m, tm.d).fajr;
  }
  return { times, next, minsLeft, active: current ?? null };
}

export function fmtClock(totalMin) {
  const h24 = Math.floor(totalMin / 60) % 24;
  const m = totalMin % 60;
  const h = h24 % 12 || 12;
  return `${h}:${String(m).padStart(2, '0')} ${h24 < 12 ? 'AM' : 'PM'}`;
}
