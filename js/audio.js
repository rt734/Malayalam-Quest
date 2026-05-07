const cache = new Map();

export function play(path) {
  if (!path) return;
  try {
    let audio = cache.get(path);
    if (!audio) {
      audio = new Audio(path);
      cache.set(path, audio);
    }
    audio.currentTime = 0;
    audio.play().catch(() => {/* file missing or autoplay blocked — silent no-op */});
  } catch {
    // Audio not supported — silent no-op
  }
}

export function preload(paths) {
  paths.forEach(p => {
    if (!cache.has(p)) cache.set(p, new Audio(p));
  });
}
