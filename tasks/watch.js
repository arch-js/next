/*
  watch.js
  gulp task for watching for changes and linting/running tests
*/

export default function Watch(gulp, plugins) {
  gulp.task('watch', () => {
    gulp.watch('src/**/*.js', ['bundle']);
    gulp.watch(['spec/unit/**/*.js', 'src/**/*.js'], ['test']);
  });
}
