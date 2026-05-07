import * as progress from '../progress.js';
import { chapters } from '../data/chapters.js';
import { go } from '../router.js';
import { run as runFlashcard } from '../exercises/flashcard.js';
import { run as runMCQ       } from '../exercises/mcq.js';
import { run as runMatching  } from '../exercises/matching.js';
import { run as runListen    } from '../exercises/listen.js';

const PHASES    = ['Learn', 'Recall', 'Connect', 'Listen'];
const XP_LESSON  = 10;
const XP_CHAPTER = 50;
const XP_PERFECT = 5;

export function mount(chapterId, lessonId) {
  const ch      = chapters.find(c => c.id === chapterId);
  const lesson  = ch.lessons.find(l => l.id === lessonId);
  const area    = document.getElementById('exercise-area');
  const section = document.getElementById('screen-exercise');
  let phase      = 0;
  let totalScore = 0;

  document.getElementById('exercise-back-btn').onclick = () => go(`/chapter/${chapterId}`);

  function updatePhaseBar() {
    const bar = document.getElementById('phase-bar');
    bar.innerHTML = PHASES.map((_, i) =>
      `<div class="phase-dot ${i < phase ? 'done' : i === phase ? 'active' : ''}"></div>`
    ).join('');
  }

  function nextPhase(score = 0) {
    totalScore += score;
    phase++;
    if (phase >= PHASES.length) { finishLesson(); return; }
    updatePhaseBar();
    runPhase();
  }

  function runPhase() {
    const letters = lesson.letters;
    updatePhaseBar();
    if (phase === 0) runFlashcard(area, letters, () => nextPhase());
    if (phase === 1) runMCQ      (area, letters, s  => nextPhase(s));
    if (phase === 2) runMatching (area, letters, () => nextPhase());
    if (phase === 3) runListen   (area, letters, s  => nextPhase(s));
  }

  function finishLesson() {
    const isPerfect = totalScore >= lesson.letters.length * 2;
    let xpEarned = XP_LESSON + (isPerfect ? XP_PERFECT : 0);

    progress.completeLesson(chapterId, lessonId);
    progress.addXP(xpEarned);

    const chapterDone = ch.lessons.every(l => progress.isLessonComplete(chapterId, l.id));
    if (chapterDone) {
      progress.earnBadge(ch.badge.id);
      progress.addXP(XP_CHAPTER);
      xpEarned += XP_CHAPTER;
      const nextCh = chapters.find(c => c.id === chapterId + 1);
      if (nextCh) progress.unlockChapter(nextCh.id);
    }

    area.innerHTML = `
      <div class="result-overlay">
        <div class="result-card">
          <h2>${isPerfect ? '🌟 Perfect!' : '✅ Complete!'}</h2>
          <p class="result-xp">+${xpEarned} XP earned</p>
          ${chapterDone ? `<p style="color:var(--gold);margin-bottom:12px;">${ch.badge.icon} ${ch.badge.name} unlocked!</p>` : ''}
          <button class="btn-primary" id="continue-btn">Continue →</button>
        </div>
      </div>
    `;
    document.getElementById('continue-btn').onclick = () => go(`/chapter/${chapterId}`);
  }

  section.hidden = false;
  runPhase();
}
