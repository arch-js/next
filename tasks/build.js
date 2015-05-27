/*
  tasks/bundle.js
  gulp task for bundling src into lib
*/

export default function build(gulp, plugins) {
  gulp.task('build', () => {
    let { babel } = plugins;
    return gulp.src('src/**/*.js')
      .pipe(babel())
      .pipe(gulp.dest('lib'));
  });
}
