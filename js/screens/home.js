import * as progress from '../progress.js';
import { go } from '../router.js';

export function mount() {
  const section = document.getElementById('screen-home');
  const input   = document.getElementById('name-input');
  const btn     = document.getElementById('begin-btn');
  const state   = progress.load();

  if (state.playerName) {
    btn.textContent = `Continue Adventure ⚔️ (${state.playerName})`;
    input.style.display = 'none';
  } else {
    btn.textContent = 'Begin Adventure ⚔️';
    input.style.display = '';
  }

  btn.onclick = () => {
    const name = input.value.trim() || state.playerName;
    if (!name) { input.style.border = '1px solid var(--danger)'; return; }
    progress.setPlayerName(name);
    go('/map');
  };

  section.hidden = false;
}
