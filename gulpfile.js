const gulp = require('gulp')
const purgecss = require('gulp-purgecss')

gulp.task('purgecss', () => {
  return gulp.src('css/main.css')
    .pipe(purgecss({
      content: ['public/index.html']
    }))
    .pipe(gulp.dest('public/css'))
})
