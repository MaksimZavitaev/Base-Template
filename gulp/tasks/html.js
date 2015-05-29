'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('html:dest', function () {
    return gulp.src(HTML_FOLDER + '/**/*.html')
        .pipe(gulp.dest(PUBLIC_FOLDER))
        .pipe($.connect.reload())
        .pipe($.notify({
            title: 'HTML files',
            message: 'Успешно скопировано'
        }));
});

gulp.task('html:watch', ['html:dest'], function () {
    gulp.watch(HTML_FOLDER + '/**/*.html', ['html:dest']);
});