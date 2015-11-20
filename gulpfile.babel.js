/*
  tasks/index.js
  gulp task initialiser, loading other gulp tasks in this directory
*/

import 'babel-polyfill';
import find from 'find';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import path from 'path';

const plugins = gulpLoadPlugins();

find
  .fileSync(/\.js$/, path.join(__dirname, 'tasks'))
  .map(file => `./tasks/${path.basename(file)}`)
  .map(file => require(file).default)
  .forEach(task => {
    task(gulp, plugins);
  });

gulp.task('default', ['test', 'build']);
