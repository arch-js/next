/*
  mocha.js
  gulp task for running unit tests via mocha
*/

export default function test(gulp, plugins) {
  gulp.task('mocha', () => {
    let { mocha } = plugins;
    return gulp.src('spec/unit/**/*.js')
      .pipe(mocha());
  });
}
