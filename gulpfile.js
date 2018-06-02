 const gulp = require('gulp');
 const sass = require('gulp-sass');
 const cssnano = require('gulp-cssnano');
 const rename = require('gulp-rename');
 const uglify = require('gulp-uglify');
 
 gulp.task('sass',function(){
 	gulp.src('src/scss/*.scss').pipe(sass()).pipe(cssnano()).pipe(rename({'suffix':'.min'})).pipe(gulp.dest('css'));
 })
 gulp.task('js',function(){
 	gulp.src('src/js/*.js').pipe(uglify()).pipe(rename({'suffix':'.min'})).pipe(gulp.dest('js'));
 })
gulp.task('default',function(){
	gulp.watch(['src/scss/*.scss','src/js/*.js'],['sass','js']);
})
