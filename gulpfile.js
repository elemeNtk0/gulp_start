var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  gulp.src('_dev/scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('prod/css'))
});

gulp.task('watch', function(){
  gulp.watch('_dev/scss/**/*.scss', ['sass']);
});