var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('server', function () {
    return connect.server({
        root: config.server.folder,
        port: config.server.port,
        liveReload: config.server.liveReload
    });
});