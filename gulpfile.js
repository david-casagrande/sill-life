var gulp = require('gulp')
var sass = require('gulp-sass')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var minifyCSS = require('gulp-minify-css')

var scssPath = ['./scss/**/*.scss']

gulp.task('sass', function() {
  gulp.src(scssPath)
    .pipe(sourcemaps.init())
      .pipe(sass({ imagePath: '../images' }))
    .pipe(sourcemaps.write())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./css'))
})

gulp.task('watch', function() {
  gulp.watch(scssPath, ['sass'])
})

gulp.task('default', ['watch', 'sass'])
