// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');

// Lint Task
gulp.task('lint', function() {
    return gulp.src(['js/**/*.js','tests/**/*.tests.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

var Server = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['js/**/*.js', 'tests/**/*tests.js'], ['lint', 'test']);
});

// Default Task
gulp.task('default', ['lint', 'watch']);