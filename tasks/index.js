/*
  tasks/index.js
  gulp task initialiser, loading other gulp tasks in this directory
*/

import find from 'find';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import path from 'path';

const plugins = gulpLoadPlugins();

find
  .fileSync(/^(?!index\.js)/, __dirname)
  .map(file => `./${path.basename(file)}`)
  .map(file => require(file))
  .forEach(task => {
    task(gulp, plugins);
  });

gulp.task('default', ['test', 'build']);
