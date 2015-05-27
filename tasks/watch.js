/*
  watch.js
  gulp task for watching in development
*/

export default function Watch(gulp, plugins) {
  gulp.task('watch', () => {
    gulp.watch('src/**/*.js', 'bundle');
    gulp.watch('**/*.js', 'lint');
    gulp.watch('spec/**/*.t.js', 'test');
  });
}
