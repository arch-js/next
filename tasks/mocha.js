/*
  tasks/unit.js
  gulp task for running unit tests via mocha
*/

export default function unit(gulp, plugins) {
  gulp.task('unit', () => {
    let { cached, mocha, plumber } = plugins;
    return gulp.src('spec/unit/**/*.js')
      .pipe(plumber())
      .pipe(cached('unit tests'))
      .pipe(mocha());
  });
}
