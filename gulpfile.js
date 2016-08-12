/**
 * Created by MrSingh on 8/12/16.
 */

'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;
var browserSync = require('browser-sync').create();
var historyApiFallback = require('connect-history-api-fallback');


gulp.task('inject', function(){
    var wiredep = require('wiredep').stream;
    var options = {
        bowerJson: require('./bower.json'),
        directory: './bower-components/'
    };


    return gulp.src('./index.html')
        .pipe(wiredep(options))
        .pipe(inject(gulp.src(['./js/**/*.js', './css/**/*.css'], {read: false})))
        .pipe(gulp.dest('.'))

});

gulp.task('serve', function(){
    browserSync.init('./**/*.*',{
        server:{
            baseDir:'./',
            middleware: [historyApiFallback()]
        }
    });
});
