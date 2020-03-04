'use strict';

var gulp        = require('gulp'),
    plumber     = require('gulp-plumber'),
    imagemin    = require('gulp-imagemin'),
    webp        = require('imagemin-webp'),
    extReplace  = require('gulp-ext-replace');

var imgsrc  = 'img/*.{jpg,png}',
    imgout  = 'img/webp';

gulp.task('exportWebP', function() {
  return gulp.src(imgsrc)
    .pipe(imagemin([
      webp({
        quality: 75
      })
    ]))
    .pipe(extReplace('.webp'))
    .pipe(gulp.dest(imgout));
});

gulp.task('serve',['exportWebP'],function(){
  gulp.watch(imgsrc,['exportWebP']);
});

gulp.task('default',['serve']);
