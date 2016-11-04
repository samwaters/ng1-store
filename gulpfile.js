var gulp = require('gulp');
var gutil = require('gulp-util');
var tslint = require('gulp-tslint');
var webpack = require('webpack');

gulp.task('lint', function() {
  return gulp.src('app/**/*.ts')
    .pipe(tslint({
      formatter: 'verbose'
    }))
    .pipe(tslint.report())
});
// Webpack build
gulp.task('webpack', ['lint'], function(callback) {
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
