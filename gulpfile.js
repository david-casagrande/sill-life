var gulp = require('gulp')
var sass = require('gulp-sass')
var concat = require('gulp-concat')

var scssPath = ['./scss/**/*.scss']

gulp.task('sass', function() {
  gulp.src(scssPath)
    .pipe(sass({ imagePath: './images' }))
    .pipe(gulp.dest('./'))
})

gulp.task('watch', function() {
  gulp.watch(scssPath, ['sass'])
})

gulp.task('default', ['watch', 'sass'])
