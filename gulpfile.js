var concat = require('gulp-concat')
var gulp = require('gulp')
var minifyCSS = require('gulp-minify-css')
var rename = require("gulp-rename")
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')

var scssPath = ['./scss/**/*.scss', './bower_components/foundation/scss/**/*.scss']

gulp.task('sass', function() {
  gulp.src(scssPath)
    //.pipe(sourcemaps.init())
      .pipe(sass({ imagePath: '../images' }))
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
})

gulp.task('minify-sass', ['sass'], function() {
  gulp.src('./css/sill-life.css')
    .pipe(rename('sill-life.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./css'))
})

gulp.task('watch', function() {
  gulp.watch(scssPath, ['sass', 'minify-sass'])
})

gulp.task('default', ['watch', 'sass', 'minify-sass'])
