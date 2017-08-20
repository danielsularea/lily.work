'use strict';

var gulp          = require('gulp');
var shell         = require('gulp-shell');
var util          = require('gulp-util');
var plumber       = require('gulp-plumber');
var rename        = require('gulp-rename');
var concat        = require('gulp-concat');
var uglify        = require('gulp-uglify');
var watch         = require('gulp-watch');

var browserSync   = require('browser-sync').create();

var sass          = require('gulp-sass');
var autoprefixer  = require('gulp-autoprefixer');
var sourcemaps    = require('gulp-sourcemaps');
var jshint        = require('gulp-jshint');
var stylish       = require('jshint-stylish');

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
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: false
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/css'))
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
    .pipe(gulp.dest('assets/js'));
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
    .pipe(gulp.dest('assets/js'));
});

gulp.task('script', ['script-lib', 'script-custom'], () => {});

gulp.task('build', shell.task(['jekyll build --watch --drafts --incremental --config config/shared/_config.yml']));

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: '_site/'
    },
    port: 4000
  });

  gulp.watch('_scss/**/*.scss', ['style']);
  gulp.watch('_js/custom/**/*.js', ['script-custom']);
  gulp.watch('_js/lib/**/*.js', ['script-lib']);
  gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['style', 'script', 'build', 'serve'], () => {});