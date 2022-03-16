const gulp = require('gulp');
const uncss = require('gulp-uncss');

gulp.task('uncss', () => {
  return gulp.src('css/*.css')
    .pipe(uncss({
      html: ['*.html']
    }))
    .pipe(gulp.dest('./public/css'));
});
