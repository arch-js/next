/*
  tasks/build.js
  gulp task for transpiling src to lib (babel)
*/

export default function build(gulp, plugins) {
  gulp.task('build', () => {
    let { babel, cached } = plugins;
    return gulp.src('src/**/*.js')
      .pipe(cached('compile'))
      .pipe(babel())
      .pipe(gulp.dest('lib'));
  });
}
