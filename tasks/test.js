/*
  tasks/test.js
  gulp task for running unit tests and linting
*/

export default function test(gulp) {
  gulp.task('test', ['lint', 'unit']);
}
