import * as progress from '../progress.js';
import { chapters } from '../data/chapters.js';
import { go } from '../router.js';

export function mount(chapterId) {
  const ch      = chapters.find(c => c.id === chapterId);
  const state   = progress.load();
  const section = document.getElementById('screen-chapter');

  document.getElementById('chapter-title').textContent = `${ch.icon} ${ch.title}`;
  document.getElementById('chapter-lore').textContent  = ch.lore;

  const hasBadge = state.earnedBadges.includes(ch.badge.id);
  document.getElementById('chapter-badge').innerHTML = hasBadge
    ? `<div style="display:inline-flex;align-items:center;gap:8px;background:var(--bg-card);border:1px solid var(--gold);border-radius:8px;padding:8px 14px;color:var(--gold);">${ch.badge.icon} ${ch.badge.name} earned!</div>`
    : `<div style="display:inline-flex;align-items:center;gap:8px;background:var(--bg-card);border:1px solid var(--bg-hover);border-radius:8px;padding:8px 14px;color:var(--text-muted);">🎯 Earn: ${ch.badge.name}</div>`;

  const list = document.getElementById('lesson-list');
  list.innerHTML = '';
  for (const lesson of ch.lessons) {
    const done = progress.isLessonComplete(ch.id, lesson.id);
    const item = document.createElement('div');
    item.className = `lesson-item ${done ? 'complete' : ''}`;
    item.innerHTML = `
      <span>${lesson.title}</span>
      <span class="lesson-stars">${done ? '★' : '☆'}</span>
    `;
    item.onclick = () => go(`/exercise/${ch.id}/${lesson.id}`);
    list.appendChild(item);
  }

  section.hidden = false;
}
