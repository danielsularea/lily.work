'use strict';

var gulp        = require('gulp');
var shell       = require('gulp-shell');
var util        = require('gulp-util');
var plumber     = require('gulp-plumber');
var rename      = require('gulp-rename');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var watch       = require('gulp-watch');

var browserSync = require('browser-sync').create();

var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var jshint      = require('gulp-jshint');
var stylish     = require('jshint-stylish');

gulp.task('style', () => {
  return gulp.src('_scss/*.scss')
    .pipe(plumber({
      errorHandler: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
    // .pipe(browserSync.stream());
});

gulp.task('script-lib', () => {
  return gulp.src('_js/lib/*.js')
    .pipe(plumber({
      errorHandler: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(concat('lib.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('script-custom', () => {
  return gulp.src('_js/custom/*.js')
    .pipe(plumber({
      errorHandler: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('build', shell.task(['bundle exec jekyll build']));

gulp.task('reload', ['build'], () => {
    browserSync.reload();
});

gulp.task('script', ['script-lib', 'script-custom'], () => {});

gulp.task('serve', ['style', 'script', 'build'], () => {
  browserSync.init({
      server: {baseDir: '_site/'}
  });
});

gulp.task('watch', () => {
  gulp.watch('_scss/**/*.scss', ['style']);
  gulp.watch('_js/**/*.js', ['script']);
  gulp.watch(['**/*.html', '_data/*', '_includes/**/*', '_js/**/*', '_layouts/*', '_scss/**/*'], ['reload']);
});

gulp.task('default', ['serve', 'watch'], () => {});