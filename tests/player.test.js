import { describe, it, expect } from 'vitest';
import { titleFromXP, nextTitleXP } from '../js/player.js';

describe('titleFromXP', () => {
  it('0 XP → Script Novice',        () => expect(titleFromXP(0)).toBe('Script Novice'));
  it('99 XP → Script Novice',       () => expect(titleFromXP(99)).toBe('Script Novice'));
  it('100 XP → Letter Learner',     () => expect(titleFromXP(100)).toBe('Letter Learner'));
  it('250 XP → Vowel Apprentice',   () => expect(titleFromXP(250)).toBe('Vowel Apprentice'));
  it('500 XP → Consonant Explorer', () => expect(titleFromXP(500)).toBe('Consonant Explorer'));
  it('750 XP → Matra Master',       () => expect(titleFromXP(750)).toBe('Matra Master'));
  it('1000 XP → Script Scholar',    () => expect(titleFromXP(1000)).toBe('Script Scholar'));
  it('1500 XP → Malayalam Reader',  () => expect(titleFromXP(1500)).toBe('Malayalam Reader'));
  it('2000 XP → Language Champion', () => expect(titleFromXP(2000)).toBe('Language Champion 👑'));
  it('9999 XP → Language Champion', () => expect(titleFromXP(9999)).toBe('Language Champion 👑'));
});

describe('nextTitleXP', () => {
  it('returns next threshold from 0',   () => expect(nextTitleXP(0)).toBe(100));
  it('returns next threshold from 100', () => expect(nextTitleXP(100)).toBe(250));
  it('returns null at max title',       () => expect(nextTitleXP(2000)).toBeNull());
});
