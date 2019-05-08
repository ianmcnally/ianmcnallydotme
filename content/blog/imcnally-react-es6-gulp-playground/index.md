---
title: "imcnally/react-es6-gulp-playground"
date: "2015-02-14"
---

I couldn’t find any good information on building a project with React and ES6 on the internet, so I built my own! I used gulp to compile, and browserify to take care of module loading (at least while ES6 is being compiled).

A decent gulp task was what I was looking for the most. Here’s the gist of it:

```
var gulp = require('gulp');
var browserify = require('browserify');
var to5ify = require('6to5ify');
var source = require('vinyl-source-stream');

gulp.task('compile', function(){
  return browserify('./src/app.jsx')
    .transform(to5ify)
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist/javascript'));
});

```
