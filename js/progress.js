const KEY = 'malayalam-quest';

const defaults = () => ({
  playerName: '',
  xp: 0,
  completedLessons: {},
  earnedBadges: [],
  unlockedChapters: [1],
});

export function load() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...defaults(), ...JSON.parse(raw) } : defaults();
  } catch {
    return defaults();
  }
}

export function save(state) {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function addXP(n) {
  const s = load();
  s.xp += n;
  save(s);
  return s.xp;
}

export function completeLesson(chapterId, lessonId) {
  const s = load();
  s.completedLessons[`${chapterId}-${lessonId}`] = true;
  save(s);
}

export function isLessonComplete(chapterId, lessonId) {
  return !!load().completedLessons[`${chapterId}-${lessonId}`];
}

export function earnBadge(badgeId) {
  const s = load();
  if (!s.earnedBadges.includes(badgeId)) {
    s.earnedBadges.push(badgeId);
    save(s);
  }
}

export function unlockChapter(id) {
  const s = load();
  if (!s.unlockedChapters.includes(id)) {
    s.unlockedChapters.push(id);
    save(s);
  }
}

export function setPlayerName(name) {
  const s = load();
  s.playerName = name;
  save(s);
}

export function reset() {
  localStorage.removeItem(KEY);
}
