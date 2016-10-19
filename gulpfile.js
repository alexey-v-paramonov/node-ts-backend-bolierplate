var gulp = require("gulp"),
    ts = require("gulp-typescript"),
    tsFiles = "src/**/*.ts",
    nodemon = require('gulp-nodemon'),
    del = require('del'),
    dest = "dist",
    tsProject = ts.createProject("tsconfig.json");

gulp.task('clean', function(cb){
    return del('dist', cb)    
})

gulp.task("compile", ['clean'], function () {
    return gulp.src([tsFiles])
        .pipe(tsProject()).js.pipe(gulp.dest(dest))
})

gulp.task("default", ["compile"], function () {
    return gulp.watch([tsFiles], ["compile"])
});

gulp.task('watch', ['compile'], function () {
    
    var stream = nodemon({
        script: 'dist/server.js', // run ES5 code
        ext: 'ts',
        watch: tsFiles, // watch ES2015 code 
        tasks: ['compile'] // compile synchronously onChange 
    });

    return stream;
})
