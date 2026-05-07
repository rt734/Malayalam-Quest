import { on, start } from './router.js';
import { mount as mountHome     } from './screens/home.js';
import { mount as mountMap      } from './screens/map.js';
import { mount as mountChapter  } from './screens/chapter.js';
import { mount as mountExercise } from './screens/exercise-runner.js';

on('/',                              () => mountHome());
on('/map',                           () => mountMap());
on('/chapter/:id',                   ({ id }) => mountChapter(Number(id)));
on('/exercise/:chapterId/:lessonId', ({ chapterId, lessonId }) =>
  mountExercise(Number(chapterId), Number(lessonId)));

start();
