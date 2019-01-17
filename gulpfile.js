const gulp = require( 'gulp' ),
    autoprefixer = require ('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    concat = require( 'gulp-concat' ),
    cssMin = require('gulp-csso'),
    htmlMin = require('gulp-htmlmin'),
    rename = require('gulp-rename'),
    sass = require( 'gulp-sass' ),
    tinify = require('gulp-tinify'),
    uglify = require('gulp-uglify'),

    KEY_FOR_TINIFY = 'tsF7pJ23cQTR5J4cd9gWYB3lSHm34RXC',
    paths = {
        sass: [
            'lib/**/*.scss',
            'blocks/container.scss',
            'blocks/**/*.scss',
            'blocks/**/**/*.scss',
        ],
        js: [
            'js/Good.js',
            'js/Basket.js',
            '!js/build.min.js',
        ],
    };

gulp.task('babel', function () {
    gulp.src( paths.js )
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe( concat( 'build.min.js' ))
        .pipe(gulp.dest('dist/js/'))
        .pipe(gulp.dest('js/'));
});

gulp.task('sass', function () {
    gulp.src( paths.sass )
        .pipe( concat( 'style.scss' ))
        .pipe(gulp.dest('style/'))
        .pipe( sass())
        .pipe(autoprefixer({
            browsers: ['last 4 version'],
            cascade: false
        }))
        .pipe(gulp.dest( 'style/' ))
        .pipe(cssMin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/style/'))
        .pipe(gulp.dest('style/'));
});

gulp.task('html', function () {
    gulp.src('*.html')
        .pipe(htmlMin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/'));
});

gulp.task('tinify', function() {
    gulp.src('img/**/*')
        .pipe(tinify(KEY_FOR_TINIFY))
        .pipe(gulp.dest('dist/img/'));
});

gulp.task('build', function () {
    gulp.src(['fonts/**'])
        .pipe(gulp.dest('dist/fonts/'));
    gulp.src(['bower_components/**'])
        .pipe(gulp.dest('dist/bower_components/'));
    gulp.src(['lib/fontawesome/**'])
        .pipe(gulp.dest('dist/lib/fontawesome/'));
    gulp.src(['responses/*'])
        .pipe(gulp.dest('dist/responses/'));
    gulp.src(['js/calendar.js'])
        .pipe(gulp.dest('dist/js/calendar.js'));
});

gulp.task('default', gulp.series(gulp.parallel('html', 'sass', 'babel')));