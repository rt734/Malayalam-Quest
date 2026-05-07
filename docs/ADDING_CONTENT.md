# Adding Content

## Adding a new letter to an existing lesson

Open `js/data/chapters.js`. Find the chapter and lesson. Add a letter object to the `letters` array:

```js
{ char: 'ക', romanized: 'ka', ipa: '/ka/', audio: 'audio/consonants/ka.mp3', meaning: 'First consonant' }
```

Then add the audio file at the path you specified.

## Adding a new lesson to a chapter

In `js/data/chapters.js`, add a new object to the chapter's `lessons` array:

```js
{
  id: 4,
  title: 'My New Lesson',
  letters: [ /* letter objects */ ]
}
```

## Adding a new chapter

Append a new chapter object to the `chapters` array. Give it the next `id` (11, 12, etc.) and follow the existing structure exactly.

## Audio format

Mono MP3, 44.1 kHz, ~0.5 s, normalised to −3 dB. Name the file to match the `audio` path in your letter object.
