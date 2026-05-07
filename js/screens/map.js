import * as progress from '../progress.js';
import { titleFromXP, xpPercent } from '../player.js';
import { chapters } from '../data/chapters.js';
import { go } from '../router.js';

export function mount() {
  const state   = progress.load();
  const section = document.getElementById('screen-map');

  document.getElementById('map-player-name').textContent  = state.playerName;
  document.getElementById('map-player-title').textContent = `· ${titleFromXP(state.xp)}`;
  document.getElementById('map-player-xp').textContent    = `${state.xp} XP`;
  document.getElementById('map-xp-bar').style.width       = `${xpPercent(state.xp)}%`;

  const path = document.getElementById('map-path');
  path.innerHTML = '';

  for (const ch of chapters) {
    const unlocked = state.unlockedChapters.includes(ch.id);
    const allDone  = ch.lessons.every(l => progress.isLessonComplete(ch.id, l.id));
    const status   = !unlocked ? 'locked' : allDone ? 'complete' : 'active';
    const statusIcon = { locked: '🔒', complete: '✓', active: '▶' }[status];

    const node = document.createElement('div');
    node.className = `map-node ${status}`;
    node.innerHTML = `
      <span class="node-icon">${ch.icon}</span>
      <div>
        <div class="node-title">Ch ${ch.id} — ${ch.title}</div>
        <div style="font-size:0.8rem;color:var(--text-muted)">${ch.lessons.length} lessons</div>
      </div>
      <span class="node-status">${statusIcon}</span>
    `;
    if (unlocked) node.onclick = () => go(`/chapter/${ch.id}`);
    path.appendChild(node);
  }

  section.hidden = false;
}
