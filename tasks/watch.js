/*
  tasks/watch.js
  gulp task for watching for changes and linting/running tests
*/

export default function Watch(gulp, plugins) {
  gulp.task('watch', () => {
    gulp.watch('src/**/*.js', ['build']);
    gulp.watch(['spec/**/*.js', 'src/**/*.js'], ['test']);
  });
}
