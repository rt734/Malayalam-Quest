import { play } from '../audio.js';

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export function run(container, letters, onComplete) {
  let index = 0;
  let score = 0;

  function render() {
    if (index >= letters.length) { onComplete(score); return; }
    const correct = letters[index];
    const pool    = shuffle(letters.filter((_, i) => i !== index));
    const options = shuffle([correct, ...pool.slice(0, 3)]);

    container.innerHTML = `
      <p style="text-align:center;color:var(--text-muted);margin-bottom:12px;">Which letter did you hear?</p>
      <button class="listen-play-btn" id="play-btn">🔊</button>
      <div class="listen-grid">
        ${options.map(o => `
          <button class="listen-option ml" data-correct="${o === correct}">${o.char}</button>
        `).join('')}
      </div>
      <p style="text-align:center;color:var(--text-muted);margin-top:12px;font-size:0.85rem;">${index + 1} / ${letters.length}</p>
    `;

    play(correct.audio);
    document.getElementById('play-btn').onclick = () => play(correct.audio);

    container.querySelectorAll('.listen-option').forEach(btn => {
      btn.onclick = () => {
        const isCorrect = btn.dataset.correct === 'true';
        btn.classList.add(isCorrect ? 'correct' : 'wrong');
        if (!isCorrect) {
          container.querySelector('[data-correct="true"]').classList.add('correct');
        } else {
          score++;
        }
        container.querySelectorAll('.listen-option').forEach(b => b.disabled = true);
        setTimeout(() => { index++; render(); }, 900);
      };
    });
  }

  render();
}
