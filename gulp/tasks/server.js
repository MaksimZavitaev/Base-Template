'use strict';

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('server', function () {
    return $.connect.server({
        root: config.server.folder,
        port: config.server.port,
        liveReload: config.server.liveReload
    });
});