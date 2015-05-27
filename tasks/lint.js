/*
  lint.js
  gulp task for running eslint
*/

export default function lint(gulp, plugins) {
  gulp.task('lint', () => {
    let { eslint } = plugins;
    return gulp.src('.')
      .pipe(eslint());
  });
}
