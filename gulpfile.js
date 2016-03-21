'use strict';

var gulp = require('gulp');
var merge = require('merge2');
var ts = require('gulp-typescript');
var lint = require('gulp-tslint');
var mocha = require('gulp-mocha');

var project = ts.createProject('tsconfig.json', { declaration: true });
var testProject = ts.createProject('tsconfig.json');

gulp.task('lib', function() {
    var tsLib = gulp.src('src/*.ts')
        .pipe(ts(project));

    return merge(tsLib.js, tsLib.dts)
        .pipe(gulp.dest('lib'));
});

gulp.task('test', ['lib'], function() {
    return gulp.src('test/*.ts')
        .pipe(ts(project)).js
	.pipe(gulp.dest('test'))
	.pipe(mocha());
});

gulp.task('default', ['test']);
