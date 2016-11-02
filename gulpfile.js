var gulp = require('gulp');
var gutil = require('gulp-util');
var ts = require('gulp-typescript');
var tslint = require('gulp-tslint');
var webpack = require('webpack');
// Compile ts -> js
gulp.task('compile.ts', function() {
    return gulp.src('app/**/*.ts')
        .pipe(ts())
        .pipe(gulp.dest(function(f) { return f.base; }));
});
gulp.task('lint', function() {
    return gulp.src('app/**/*.ts')
        .pipe(tslint({
            formatter: 'verbose'
        }))
        .pipe(tslint.report())
});
// Watcher to recompile
gulp.task('watch', function() {
    gulp.watch('app/**/*.ts', ['webpack']);
});
// Webpack build
gulp.task('webpack', ['lint', 'compile.ts'], function(callback) {
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
