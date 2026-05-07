# Architecture

## Overview

Malayalam Quest is a single-page application (SPA) with no build step. `index.html` is the only HTML file. All screens are `<section data-route>` elements that the router shows/hides.

## Routing (`js/router.js`)

Hash-based: `window.location.hash` drives navigation.

| Route | Screen |
|---|---|
| `#/` | Home (name entry) |
| `#/map` | Adventure map |
| `#/chapter/:id` | Chapter overview |
| `#/exercise/:chapterId/:lessonId` | Exercise runner |

## State (`js/progress.js`)

All progress is stored in `localStorage` under the key `malayalam-quest`. Shape:

```json
{
  "playerName": "string",
  "xp": 0,
  "completedLessons": { "1-1": true },
  "earnedBadges": ["vowel-master"],
  "unlockedChapters": [1]
}
```

## Exercise Flow

`exercise-runner.js` receives `(chapterId, lessonId)`, loads the lesson's letter array, then runs 4 phases sequentially: flashcard → mcq → matching → listen. Each phase module exports `run(container, letters, onComplete)`.

## Data (`js/data/chapters.js`)

Single export `chapters` — an array of 10 chapter objects. Each chapter contains `lessons[]`, each lesson contains `letters[]`. A letter object:

```js
{ char, romanized, ipa, audio, meaning }
```

To add content, edit only this file. No other code changes needed.
