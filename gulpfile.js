/* File: gulpfile.js */

// grab our packages
var gulp   = require("gulp"),
    eslint = require("gulp-eslint"),
    babel = require("gulp-babel"),
    sourcemaps = require("gulp-sourcemaps"),
    concat = require("gulp-concat");

// define the default task and add the watch task to it
gulp.task("default", ["watch"]);

// configure the jshint task
gulp.task("lint", function() {
  return gulp.src("src/**/*.js")
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task("babel", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("solar-system.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});

// configure which files to watch and what tasks to use on file changes
gulp.task("watch", function() {
  gulp.watch("src/*.js", ["lint", "babel"]);
});


