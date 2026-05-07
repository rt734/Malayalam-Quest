const handlers = new Map();

export function _matchRoute(path, routeMap = handlers) {
  const segs = path.replace(/^\//, '').split('/').filter(Boolean);

  for (const [pattern, fn] of routeMap) {
    const pSegs = pattern.replace(/^\//, '').split('/').filter(Boolean);
    if (pattern === '/' && segs.length !== 0) continue;
    if (pattern !== '/' && pSegs.length !== segs.length) continue;

    const params = {};
    const match = (pattern === '/') ? segs.length === 0 : pSegs.every((p, i) => {
      if (p[0] === ':') { params[p.slice(1)] = segs[i]; return true; }
      return p === segs[i];
    });
    if (match) return { fn, params };
  }
  return null;
}

export function on(pattern, fn) {
  handlers.set(pattern, fn);
}

export function go(path) {
  window.location.hash = path;
}

export function start() {
  function dispatch() {
    const hash = window.location.hash || '#/';
    const path = hash.slice(1) || '/';
    document.querySelectorAll('[data-route]').forEach(el => { el.hidden = true; });
    const match = _matchRoute(path, handlers);
    if (match) match.fn(match.params);
  }
  window.addEventListener('hashchange', dispatch);
  dispatch();
}
