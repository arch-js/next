/*
  tasks/watch.js
  gulp task for watching for changes and linting/running tests
*/

export default function watch(gulp, plugins) {
  let { cached } = plugins;

  function clearCache({ path }) {
    let files = [
      path.replace('/src/', '/spec/unit/'),
      path.replace('/spec/unit/', '/src/')
    ]; // Invalidate both source and spec files so tests run against changed files.

    Object.keys(cached.caches).forEach((cache) => {
      files.forEach(file => delete cached.caches[cache][file]);
    });
  }

  gulp.task('watch', () => {
    gulp.watch('src/**/*.js', ['test', 'build']).on('change', clearCache);
    gulp.watch(['spec/**/*.js'], ['test']).on('change', clearCache);
  });
}
