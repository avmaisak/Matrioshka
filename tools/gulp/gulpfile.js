//gulp
let 
	gulp = require('gulp'),
	cleanCSS = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	header = require("gulp-header"),
	gzip = require('gulp-gzip'),
	clean = require('gulp-clean'),
	dateFormat = require('dateformat'),
	pkgInfo = require(pkgFile = './package')
;

//gulp common config options
let gulpCfg = {
	
	scssDest: "../../src/scss/matrioshka.css",
	distFileName:"matrioshka.min.css",
	distFileDestination:"../../dist/css/",
	distTarBallDestinationPrefix:"tar/",
	distMinDestinationPrefix:"min/",
	descriptionHeader:`
	/*
	Matrioshka. 
	${pkgInfo.description}
	Source code: https://dev.s1.rus-bit.com/RusBit/Matrioshka
	Home: https://rus-bit.com/matrioshka/
	Version: ${ pkgInfo.version }
	Build date ${dateFormat(new Date(), "yyyy.mm.dd hh:MM")}
	License:Apache License Version 2.0
	Copyright (c) 2018 RusBit LTD
	Author: ${ pkgInfo.author }
	*/
	`,
	sourceFilesOrig:['*.css','*.css.map'],
};

console.log('\x1Bc');

gulp.task('clean', ()=> {
	return gulp.src(`${gulpCfg.distFileDestination}*`)
		.pipe(clean({force: true}));
});

gulp.task('copy_orig', ()=> {
	return gulp.src(`../../src/scss/${gulpCfg.sourceFilesOrig[0]}`).pipe(gulp.dest(`${gulpCfg.distFileDestination}`));
});

gulp.task('css', () => {
	return gulp.src(gulpCfg.scssDest)
		.pipe(cleanCSS())
		.pipe(header(gulpCfg.descriptionHeader))
		.pipe(rename(gulpCfg.distFileName))
		.pipe(gulp.dest(`${gulpCfg.distFileDestination}${gulpCfg.distMinDestinationPrefix}`));
});

gulp.task('css-colors', () => {
	return gulp.src("../../src/scss/matrioshka.colors.css")
		.pipe(cleanCSS())
		.pipe(header(gulpCfg.descriptionHeader))
		.pipe(rename("matrioshka.colors.min.css"))
		.pipe(gulp.dest(`${gulpCfg.distFileDestination}${gulpCfg.distMinDestinationPrefix}`));
});

gulp.task('tarball', () => {

	gzip({ 
		append: true,
		gzipOptions: { level: 9 }
	});

	return gulp.src(`${gulpCfg.distFileDestination}${gulpCfg.distMinDestinationPrefix}${gulpCfg.distFileName}`)
		.pipe(gzip())
		.pipe(gulp.dest(`${gulpCfg.distFileDestination}${gulpCfg.distTarBallDestinationPrefix}`));
});

gulp.task('tarball-colors', () => {

	gzip({ 
		append: true,
		gzipOptions: { level: 9 }
	});

	return gulp.src(`${gulpCfg.distFileDestination}${gulpCfg.distMinDestinationPrefix}matrioshka.colors.min.css`)
		.pipe(gzip())
		.pipe(gulp.dest(`${gulpCfg.distFileDestination}${gulpCfg.distTarBallDestinationPrefix}`));
});

gulp.task('default', gulp.series([
	'clean', 
	'css',
	'css-colors',
	'tarball',
	'tarball-colors',
	'copy_orig'
]));
