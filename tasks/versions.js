/*
  tasks/versions.js
  gulp tasks for bumping version numbers
*/

export default function versions(gulp, plugins) {
  let bump = (type = 'patch') => {
    return gulp
      .src('./package.json')
      .pipe(plugins.bump({type: type}))
      .pipe(gulp.dest('./'));
  };

  gulp.task('patch', () => {
    return bump();
  });

  gulp.task('minor', () => {
    return bump('minor');
  });

  gulp.task('major', () => {
    return bump('major');
  });
}
