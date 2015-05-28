global.PUBLIC_FOLDER = './public';
global.CSS_FOLDER = './src/stylesheets';
global.JS_FOLDER = './src/javascripts';
global.TEMP_FOLDER = './tmp';

global.config = {
    server: {
        folder: "./public",
        port: 8080,
        liveReload: true
    },
    sass: {
        includePaths: [
            CSS_FOLDER,
            './bower_components/bootstrap-sass/assets/stylesheets',
            './bower_components/bourbon/app/assets/stylesheets'
        ]
    },
    js: {
        ie: [
            './bower_components/es5-shim/es5-shim.js',
            './bower_components/html5shiv/dist/html5shiv.js',
            './bower_components/html5shiv/dist/html5shiv-printshiv.js',
            './bower_components/respond/dest/respond.src.js'
        ],
        vendor: [
            './bower_components/jQuery/dist/jquery.js'
        ],
        app: [
            './src/javascripts/navigation.js',
            './src/javascripts/common.js'
        ]
    }
};