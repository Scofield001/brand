const gulp = require( 'gulp' ),
	concat = require( 'gulp-concat' ),
	sass = require( 'gulp-sass' ),
	watch = require( 'gulp-watch' );

gulp.task( 'sass', () => {
	const mask = ['lib/*.scss', 'blocks/**/*.scss'],
		run = () => gulp.src( mask )
			.pipe( concat( 'style.scss' ))
			.pipe( sass(/*{
				outputStyle: 'compressed'
			}*/))
			.pipe( gulp.dest( 'style/' ));

	watch( mask, run );
	return run();
});
