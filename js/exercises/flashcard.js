import { play } from '../audio.js';

export function run(container, letters, onComplete) {
  let index = 0;

  function render() {
    if (index >= letters.length) { onComplete(); return; }
    const l = letters[index];
    container.innerHTML = `
      <div class="flashcard">
        <div class="letter ml">${l.char}</div>
        <div class="romanized">${l.romanized}</div>
        <div class="ipa">${l.ipa}</div>
        <div class="meaning">${l.meaning}</div>
        <button class="btn-secondary" id="fc-play" style="margin-top:16px;">🔊 Play</button>
      </div>
      <div class="flashcard-controls" style="margin-top:12px;">
        <button class="btn-secondary" id="fc-back" ${index === 0 ? 'disabled' : ''}>← Back</button>
        <span style="color:var(--text-muted);font-size:0.85rem;">${index + 1} / ${letters.length}</span>
        <button class="btn-primary" id="fc-next">${index === letters.length - 1 ? 'Done ✓' : 'Next →'}</button>
      </div>
    `;
    document.getElementById('fc-play').onclick = () => play(l.audio);
    document.getElementById('fc-back').onclick = () => { index--; render(); };
    document.getElementById('fc-next').onclick = () => { index++; render(); };
    play(l.audio);
  }

  render();
}
