/*
  tasks/unit.js
  gulp task for running unit tests via mocha
*/

export default function unit(gulp, plugins) {
  gulp.task('unit', () => {
    let { cached, mocha } = plugins;
    return gulp.src('spec/unit/**/*.js')
      .pipe(cached('unit tests'))
      .pipe(mocha());
  });
}
