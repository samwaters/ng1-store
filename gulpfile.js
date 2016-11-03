var concat = require('gulp-concat');
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var tslint = require('gulp-tslint');
var webpack = require('webpack');

gulp.task('lint', function() {
  return gulp.src('app/**/*.ts')
    .pipe(tslint({
      formatter: 'verbose'
    }))
    .pipe(tslint.report())
});
gulp.task('sass', function() {
  return gulp.src('app/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./styles'));
});
// Webpack build
gulp.task('webpack', ['lint', 'sass'], function(callback) {
  webpack(
    require('./webpack.config.js'),
    function(err, stats) {
      if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
          // output options
        }));
        callback();
      }
  );
});
// Watcher to recompile
gulp.task('watch', function() {
  gulp.watch('app/**/*.ts', ['webpack']);
});
