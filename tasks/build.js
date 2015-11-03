/*
  tasks/build.js
  gulp task for transpiling src to lib (babel)
*/

export default function build(gulp, plugins) {
  gulp.task('build', () => {
    let { babel, cached, plumber, util } = plugins;
    return gulp.src('src/**/*.js')
      .pipe(plumber({ errorHandler: (e) => {
        util.log(util.colors.red(`${e.name}: `), util.colors.yellow(`${e.message}`));
      }}))
      .pipe(cached('compile'))
      .pipe(babel())
      .pipe(gulp.dest('lib'));
  });
}
