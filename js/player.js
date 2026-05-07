export const TITLES = [
  { xp: 0,    label: 'Script Novice' },
  { xp: 100,  label: 'Letter Learner' },
  { xp: 250,  label: 'Vowel Apprentice' },
  { xp: 500,  label: 'Consonant Explorer' },
  { xp: 750,  label: 'Matra Master' },
  { xp: 1000, label: 'Script Scholar' },
  { xp: 1500, label: 'Malayalam Reader' },
  { xp: 2000, label: 'Language Champion 👑' },
];

export function titleFromXP(xp) {
  let current = TITLES[0].label;
  for (const { xp: threshold, label } of TITLES) {
    if (xp >= threshold) current = label;
    else break;
  }
  return current;
}

export function nextTitleXP(xp) {
  for (const { xp: threshold } of TITLES) {
    if (threshold > xp) return threshold;
  }
  return null;
}

export function xpPercent(xp) {
  const next = nextTitleXP(xp);
  if (!next) return 100;
  const prev = [...TITLES].reverse().find(t => t.xp <= xp)?.xp ?? 0;
  return Math.round(((xp - prev) / (next - prev)) * 100);
}
