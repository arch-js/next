/*
  tasks/unit.js
  gulp task for running unit tests via mocha
*/

export default function unit(gulp, plugins) {
  gulp.task('unit', () => {
    let { mocha } = plugins;
    return gulp.src('spec/unit/**/*.js')
      .pipe(mocha());
  });
}
