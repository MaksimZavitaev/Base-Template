'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('styles:build', function () {
    return gulp.src(CSS_FOLDER + '/styles.scss')
        .pipe($.sass({
            includePaths: config.sass.includePaths
        }).on("error", $.notify.onError(function (error) {
            return "Error: " + error.message;
        })))
        .pipe(gulp.dest('./public/css'))
        .pipe($.connect.reload())
        .pipe($.notify({
            title: 'SASS',
            message: 'Успешно скомпилировано'
        }));
});

gulp.task('styles:watch', ['styles:build'], function () {
    gulp.watch(CSS_FOLDER + '/**/*.scss', ['styles:build']);
});