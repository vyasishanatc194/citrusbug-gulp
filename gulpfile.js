const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const merge = require('merge-stream');


/*
Top level tsak 
gulp.task - Define task 
gulp.scr - Points to the folder to input  
gulp.dest - Points to the folder to output 
gulp.watch - Wathc Files and folders for changes 

*/

// Log message 
gulp.task('message', function () {
    return console.log("Whoa Max! Gulp is running!");
});


//Optimize Image 
gulp.task('imagemin', function () {
    gulp.src('src/public/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('destination/public'));
});

// Default 
gulp.task('default', gulp.parallel('message','imagemin'));


// //Copy All HTML File 
// gulp.task('copyhtml', function () {
//     gulp.src('src/*.html')
//         .pipe(gulp.dest('dist'));
// });


// //Compress JS 
// gulp.task('compress', function () {
//     gulp.src('src/js/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });


// gulp.task('test', function() {
//     var bootstrap = gulp.src('src/js/*.js')
//         .pipe(uglify())
//       .pipe(gulp.dest('dist/js'));
  
//       var jquery = gulp.src('src/js1/*.js')
//       .pipe(uglify())
//       .pipe(gulp.dest('dist/js1'));
    
//     return merge(bootstrap, jquery);
//   });



