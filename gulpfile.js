const gulp = require( 'gulp' ),
    concat = require( 'gulp-concat' ),
    sass = require( 'gulp-sass' ),
    watch = require( 'gulp-watch' ),
    rename = require('gulp-rename'),
    cssMin = require('gulp-csso'),
    htmlMin = require('gulp-htmlmin'),
    imgMin = require('gulp-imagemin');

gulp.task('default', ['sass', 'html', 'img'], function () {});
gulp.task( 'sass', () => {
const mask = [
                'lib/**/*.scss',
                'blocks/container.scss',
                'blocks/**/*.scss',
                'blocks/**/***/*.scss',
                '@media/1024px.scss',
                '@media/812px.scss',
                '@media/414px.scss'
            ],
    run = () => gulp.src( mask )
        .pipe( concat( 'style.scss' ))
        .pipe( sass())
        .pipe(cssMin())
        .pipe(rename({suffix: '.min'}))
        .pipe( gulp.dest( '!dist/style/'))
        .pipe( gulp.dest( 'style/'));


watch( mask, run );
return run();
});

gulp.task('html', function () {
    gulp.src('*.html')
        .pipe(htmlMin({collapseWhitespace: true}))
        .pipe(gulp.dest('!dist/'))
});
gulp.task('img', function() {
    gulp.src('img/**/*.*')
        .pipe(imgMin())
        .pipe(gulp.dest('!dist/img/'))
});