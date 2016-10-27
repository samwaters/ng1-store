var gulp = require('gulp');
gulp.task('build.dev', function() {
    return gulp.src('app/**/*.ts')
        .pipe(ts())
        .pipe(gulp.dest(function(f) { return f.base; }));
});
