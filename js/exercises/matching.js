function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export function run(container, letters, onComplete) {
  const batches = [];
  for (let i = 0; i < letters.length; i += 4) batches.push(letters.slice(i, i + 4));
  let batchIdx = 0;

  function renderBatch() {
    if (batchIdx >= batches.length) { onComplete(); return; }
    const batch      = batches[batchIdx];
    const leftItems  = shuffle(batch);
    const rightItems = shuffle(batch);
    let selected = null;
    const matched = new Set();

    function render() {
      container.innerHTML = `
        <p style="text-align:center;color:var(--text-muted);margin-bottom:16px;">Match each letter to its sound</p>
        <div class="match-columns">
          <div class="match-col" id="left-col">
            ${leftItems.map((l, i) => `
              <div class="match-item ml ${matched.has('L'+i) ? 'matched' : ''}" data-side="L" data-idx="${i}" data-id="${l.char}">
                ${l.char}
              </div>`).join('')}
          </div>
          <div class="match-col" id="right-col">
            ${rightItems.map((l, i) => `
              <div class="match-item ${matched.has('R'+i) ? 'matched' : ''}" data-side="R" data-idx="${i}" data-id="${l.char}">
                ${l.romanized}
              </div>`).join('')}
          </div>
        </div>
        <p style="text-align:center;color:var(--text-muted);margin-top:12px;font-size:0.85rem;">Batch ${batchIdx + 1} / ${batches.length}</p>
      `;

      container.querySelectorAll('.match-item:not(.matched)').forEach(item => {
        item.onclick = () => {
          if (!selected) {
            selected = item;
            item.classList.add('selected');
          } else if (selected === item) {
            selected.classList.remove('selected');
            selected = null;
          } else {
            const a = selected, b = item;
            if (a.dataset.id === b.dataset.id) {
              matched.add(a.dataset.side + a.dataset.idx);
              matched.add(b.dataset.side + b.dataset.idx);
              selected = null;
              render();
              if (matched.size === batch.length * 2) {
                setTimeout(() => { batchIdx++; renderBatch(); }, 500);
              }
            } else {
              a.classList.add('wrong'); b.classList.add('wrong');
              setTimeout(() => {
                a.classList.remove('wrong', 'selected');
                b.classList.remove('wrong');
                selected = null;
              }, 600);
            }
          }
        };
      });
    }

    render();
  }

  renderBatch();
}
