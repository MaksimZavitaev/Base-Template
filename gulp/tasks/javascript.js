'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('js:ie', function () {
    return gulp.src(config.js.ie)
        .pipe($.concat('ie.js'))
        .pipe($.uglify())
        .pipe(gulp.dest(PUBLIC_FOLDER + '/js'));
});