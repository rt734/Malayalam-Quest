import { play } from '../audio.js';

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export function run(container, letters, onComplete) {
  let index = 0;
  let score = 0;

  function render() {
    if (index >= letters.length) { onComplete(score); return; }
    const correct     = letters[index];
    const pool        = shuffle(letters.filter((_, i) => i !== index));
    const distractors = pool.slice(0, 3);
    const options     = shuffle([correct, ...distractors]);

    container.innerHTML = `
      <div class="mcq-prompt ml">${correct.char}</div>
      <p style="text-align:center;color:var(--text-muted);margin-bottom:16px;">What sound does this letter make?</p>
      <div class="mcq-grid">
        ${options.map(o => `
          <button class="mcq-option" data-choice="${o.romanized}" data-correct="${o === correct}">
            ${o.romanized}
          </button>`).join('')}
      </div>
      <p style="text-align:center;color:var(--text-muted);margin-top:12px;font-size:0.85rem;">${index + 1} / ${letters.length}</p>
    `;

    play(correct.audio);

    container.querySelectorAll('.mcq-option').forEach(btn => {
      btn.onclick = () => {
        const isCorrect = btn.dataset.correct === 'true';
        btn.classList.add(isCorrect ? 'correct' : 'wrong');
        if (!isCorrect) {
          container.querySelector('[data-correct="true"]').classList.add('correct');
        } else {
          score++;
        }
        container.querySelectorAll('.mcq-option').forEach(b => b.disabled = true);
        setTimeout(() => { index++; render(); }, 900);
      };
    });
  }

  render();
}
