# Contributing

## Audio Files

- Format: mono MP3, 44.1 kHz, normalised to −3 dB, ~0.5 s per letter sound
- Place files matching paths in `js/data/chapters.js` (e.g. `audio/vowels/a.mp3`)
- Tools: Audacity (free), Adobe Audition, or any DAW

## Adding New Content

See [ADDING_CONTENT.md](ADDING_CONTENT.md) for a step-by-step guide.

## Code Style

- ES Modules only (`import`/`export`)
- No framework, no build step
- Functions over classes
- Each file has one clear responsibility

## Running Tests

```bash
npm install
npm test
```

## Pull Requests

1. Fork the repo
2. Create a branch: `git checkout -b feat/my-change`
3. Make changes and add tests for any logic modules
4. Run `npm test` — all tests must pass
5. Open a PR with a clear description

## License

All contributions must be licensed under GPL v2.
