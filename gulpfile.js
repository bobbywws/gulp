var gulp = require("gulp");
var concat = require("gulp-concat");
var uggo = require("gulp-uglify");
var minify = require("gulp-minify-css");

// Runs when "gulp" is run in the command line
gulp.task("default", function() {
	console.log("GULPPPPPPPPP!")
	gulp.watch("./css/src/**/*.css", ["miniCSS"])
	gulp.watch("./js/src/**/*.js", ["miniJS"])
})

gulp.task("miniCSS", function() {
	console.log("CSSSSSSS!")
	gulp.src("./CSS/src/**/*.css")
		.pipe(concat("mini.css"))
			.pipe(minify())
				.pipe(gulp.dest("./CSS/dist"))
})

gulp.task("miniJS", function() {
	console.log("JSSSSSSSSS!")
	gulp.src("./JS/src/**/*.js")
		.pipe(concat("mini.js"))
			.pipe(minify())
				.pipe(gulp.dest("./JS/dist"))
})