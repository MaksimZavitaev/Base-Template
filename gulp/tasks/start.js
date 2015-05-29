'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('default', function () {
    gulp.start('server', 'styles:watch', 'html:watch')
});