'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('styles:build', function () {
    return gulp.src('./src/sass/styles.scss')
        .pipe($.sass({
            includePaths: [
                './src/sass/',
                './bower_components/bootstrap-sass/assets/stylesheets'
            ]
        }).on("error", $.notify.onError(function (error) {
            return "Error: " + error.message;
        })))
        .pipe(gulp.dest('./public/css'))
        .pipe($.notify('Стили SASS успешно скомпилированы'));
});