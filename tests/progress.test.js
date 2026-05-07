import { describe, it, expect, beforeEach } from 'vitest';

const store = {};
global.localStorage = {
  getItem: k => store[k] ?? null,
  setItem: (k, v) => { store[k] = v; },
  removeItem: k => { delete store[k]; },
};

beforeEach(() => {
  delete store['malayalam-quest'];
});

import * as progress from '../js/progress.js';

describe('progress', () => {
  it('load returns defaults when empty', () => {
    const s = progress.load();
    expect(s.xp).toBe(0);
    expect(s.completedLessons).toEqual({});
    expect(s.unlockedChapters).toEqual([1]);
  });

  it('addXP increments and persists', () => {
    progress.addXP(10);
    expect(progress.load().xp).toBe(10);
    progress.addXP(5);
    expect(progress.load().xp).toBe(15);
  });

  it('completeLesson marks lesson', () => {
    progress.completeLesson(1, 2);
    expect(progress.isLessonComplete(1, 2)).toBe(true);
    expect(progress.isLessonComplete(1, 3)).toBe(false);
  });

  it('earnBadge adds once only', () => {
    progress.earnBadge('vowel-master');
    progress.earnBadge('vowel-master');
    expect(progress.load().earnedBadges).toHaveLength(1);
  });

  it('unlockChapter appends once', () => {
    progress.unlockChapter(2);
    progress.unlockChapter(2);
    expect(progress.load().unlockedChapters).toEqual([1, 2]);
  });

  it('reset clears storage', () => {
    progress.addXP(100);
    progress.reset();
    expect(progress.load().xp).toBe(0);
  });
});
