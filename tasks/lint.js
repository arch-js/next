/*
  tasks/lint.js
  gulp task for running eslint
*/

export default function lint(gulp, plugins) {
  gulp.task('lint', () => {
    let { cached, eslint, plumber } = plugins;
    return gulp.src(['./*.js', 'src/**/*.js', 'spec/**/*.js'])
      .pipe(plumber())
      .pipe(cached('lint'))
      .pipe(eslint())
      .pipe(eslint.format());
  });
}
