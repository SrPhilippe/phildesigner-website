let gulp = require('gulp'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    prefix = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify')

gulp.task('default', () => {
    gulp.watch('./docs/sass/*.scss', ['doCSS'])
    gulp.watch('./docs/js/*.js', ['doJS'])
})

gulp.task('doCSS', () => {
    gulp.src('./docs/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(csso())
        .pipe(prefix({
            browsers: ['last 1 version']
        }))
        .pipe(gulp.dest('./docs/dist'))

})

gulp.task('doJS', () => {
    gulp.src('./docs/sass/style.scss')
        .pipe(uglify())
        .pipe(gulp.dest('./docs/dist'))
})