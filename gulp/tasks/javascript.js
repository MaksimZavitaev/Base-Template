'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('js:ie', function () {
    return gulp.src(config.js.ie)
        .pipe($.concat('ie.js'))
        .pipe($.uglify())
        .pipe(gulp.dest(PUBLIC_FOLDER + '/js'));
});

gulp.task('js:vendor', function () {
    return gulp.src(config.js.vendor)
        .pipe($.concat('vendor.min.js'))
        .pipe($.uglify())
        .pipe(gulp.dest(PUBLIC_FOLDER + '/js'));
});

gulp.task('js:app:build', function () {
    return gulp.src(config.js.app)
        .pipe($.concat('app.js'))
        .pipe(gulp.dest(PUBLIC_FOLDER + '/js'));
});

gulp.task('js:app:minify', ['js:app:build'], function () {
    return gulp.src(PUBLIC_FOLDER + '/js/app.js')
        .pipe($.uglify())
        .pipe($.rename('app.min.js'))
        .pipe(gulp.dest(PUBLIC_FOLDER + '/js'));
});

gulp.task('js:app:watch', ['js:app:build'], function () {
    gulp.watch(JS_FOLDER + '/**/*.js', ['js:app:build']);
});