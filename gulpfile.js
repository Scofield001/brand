const gulp = require( 'gulp' ),
	concat = require( 'gulp-concat' ),
	sass = require( 'gulp-sass' ),
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
			.pipe( sass({
				outputStyle: 'compressed'
			}))
			.pipe( gulp.dest( 'style/' ));

	watch( mask, run );
	return run();
});
