var devserver = require('webpack-dev-server');
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
  gulp.watch('app/**/*', ['webpack']);
});
// Dev server
gulp.task('ds', function() {
  var config = require('./webpack.config');
  config.entry.app.unshift('webpack/hot/dev-server');
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  var compiler = webpack(config);
  new devserver(compiler, {
    hot: true,
    publicPath: '/js/'
  }).listen(8080, "localhost");
});
