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
        .pipe(gulp.dest(PUBLIC_FOLDER + '/css'))
        .pipe($.connect.reload())
        .pipe($.notify({
            title: 'SASS',
            message: 'Успешно скомпилировано'
        }));
});

gulp.task('styles:minify', ['styles:build'], function () {
    return gulp.src(PUBLIC_FOLDER + '/css/styles.css')
        .pipe($.cssmin())
        .pipe($.rename('styles.min.css'))
        .pipe(gulp.dest(PUBLIC_FOLDER + '/css'))
        .pipe($.notify({
            title: 'SASS',
            message: 'Успешно минифицировано'
        }));
});

gulp.task('styles:watch', ['styles:build'], function () {
    gulp.watch(CSS_FOLDER + '/**/*.scss', ['styles:build']);
});