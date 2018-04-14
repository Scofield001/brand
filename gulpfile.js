const gulp = require( 'gulp' ),
	concat = require( 'gulp-concat' ),
	sass = require( 'gulp-sass' ),
	autoprefixer = require('gulp-autoprefixer'),
	watch = require( 'gulp-watch' );

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
			.pipe( sass(/*{
				outputStyle: 'compressed'
			}*/))
/*			.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
			}))*/
			.pipe( gulp.dest( 'style/' ));

	watch( mask, run );
	return run();
});
