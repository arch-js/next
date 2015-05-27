/*
  test.js
  gulp task for running unit tests
*/

export default function Test(gulp, plugins) {
  gulp.task('test', () => {
    let {mocha} = plugins;
    return gulp.src('spec/unit/**/*.js')
      .pipe(mocha());
  });
}
