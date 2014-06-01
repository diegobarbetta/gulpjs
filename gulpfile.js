var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    coffee = require('gulp-coffee');

//tasks
gulp.task('jade', function() {
    gulp.src('src/jade/**/*.jade')
        .pipe(jade({
            filename: 'index',
            pretty: true
        }))
        .pipe(gulp.dest('build/html/'));
});

gulp.task('images', function() {
    gulp.src('src/img/**')
        .pipe(imagemin({
            optimationLevel: 5
        }))
        .pipe(gulp.dest('build/img/'));
});

gulp.task('sass', function() {
    gulp.src('src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/css/'));
});

gulp.task('coffee', function() {
    gulp.src('src/coffeescript/*.coffee')
        .pipe(coffee({
            bare: true
        }).on('error', gutil.log))
        .pipe(gulp.dest('build/javascript/'));
    //gulp.run('concat-plugins');
});

//watch
gulp.task('watch', function() {
    gulp.watch('src/coffeescript/**/*.coffee', ['coffee']);
    gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['jade', 'images', 'sass', 'coffee', 'watch']);