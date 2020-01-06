'use strict';

var gulp          = require('gulp');
var shell         = require('gulp-shell');
var gutil         = require('gulp-util');
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

var CryptoJS      = require('crypto-js');
var FileSystem    = require('fs');
var through       = require('through2');
var PluginError   = gutil.PluginError;

function style() {
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
      Browserslist: ['last 5 versions'],
      cascade: false
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/css'))
    // .pipe(browserSync.stream());
};
gulp.task(style);

function scriptLib() {
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
};
gulp.task(scriptLib);

function scriptCustom() {
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
};
gulp.task(scriptCustom);

function encryptHelper(password) {
  return through.obj(function(file, encoding, callback) {
    if (file.isNull() || file.isDirectory()) {
      this.push(file);
      return callback();
    }

    // No support for streams
    if (file.isStream()) {
      this.emit('error', new PluginError({
        plugin: 'Encrypt',
        message: 'Streams are not supported.'
      }));
      return callback();
    }

    if (file.isBuffer()) {
      var chunks = String(file.contents).split('---');
      var isEncrypt = chunks[1].indexOf('workpost_encrypted');

      if (isEncrypt > 0) {
        var encrypted = CryptoJS.AES.encrypt(chunks[2], password);
        var hmac = CryptoJS.HmacSHA256(encrypted.toString(), CryptoJS.SHA256(password).toString()).toString();
        var encryptedMessage = 'encrypted: ' + hmac + encrypted;

        var result = [ '---', chunks[1], '\n', encryptedMessage, '\n', '---' ]

        file.contents = new Buffer(result.join(''));
      }

      this.push(file);
      return callback();
    }
  });
}

function encrypt() {
  return gulp.src('_work/*.*')
    .pipe(encryptHelper('lilydoesgoodwork'))
    .pipe(gulp.dest('work/_posts'));
};
gulp.task(encrypt);

function serve() {
  browserSync.init({
    server: {
      baseDir: '_site/'
    },
    port: 4000
  });

  gulp.watch('_scss/**/*.scss', gulp.series(style), () => {
    shell.task(['jekyll build'])
  });
  gulp.watch('_js/custom/**/*.js', gulp.series(scriptCustom));
  gulp.watch('_js/lib/**/*.js', gulp.series(scriptLib));
  // gulp.watch('_work/*.*', gulp.series(encrypt));
  gulp.watch('_site/**/*.*').on('change', browserSync.reload);
};
gulp.task(serve);

gulp.task('default', gulp.series(style, scriptLib, scriptCustom, serve));