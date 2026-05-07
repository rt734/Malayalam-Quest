import { describe, it, expect } from 'vitest';
import { _matchRoute } from '../js/router.js';

describe('_matchRoute', () => {
  const routes = new Map([
    ['/', () => {}],
    ['/map', () => {}],
    ['/chapter/:id', () => {}],
    ['/exercise/:chapterId/:lessonId', () => {}],
  ]);

  it('matches root', () => {
    const r = _matchRoute('', routes);
    expect(r).not.toBeNull();
    expect(r.params).toEqual({});
  });

  it('matches /map', () => {
    const r = _matchRoute('/map', routes);
    expect(r).not.toBeNull();
    expect(r.params).toEqual({});
  });

  it('extracts single param', () => {
    const r = _matchRoute('/chapter/3', routes);
    expect(r).not.toBeNull();
    expect(r.params).toEqual({ id: '3' });
  });

  it('extracts multiple params', () => {
    const r = _matchRoute('/exercise/2/4', routes);
    expect(r).not.toBeNull();
    expect(r.params).toEqual({ chapterId: '2', lessonId: '4' });
  });

  it('returns null for unknown route', () => {
    expect(_matchRoute('/unknown/path', routes)).toBeNull();
  });
});
