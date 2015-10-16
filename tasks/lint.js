/*
  tasks/lint.js
  gulp task for running eslint
*/

export default function lint(gulp, plugins) {
  gulp.task('lint', () => {
    let { cached, eslint } = plugins;
    return gulp.src(['./*.js', 'src/**/*.js', 'spec/**/*.js'])
      .pipe(cached('lint'))
      .pipe(eslint())
      .pipe(eslint.format());
  });
}
