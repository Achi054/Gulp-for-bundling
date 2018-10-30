var gulp = require('gulp');
var fileStream = require("fs");
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var minifyconfig = { 
    ext:{ min:'.js'},
    noSource: true
}

gulp.task('bundle-main-js', function(){
    var fileContent = JSON.parse(fileStream.readFileSync("bundle-config.json", "utf8"));

    fileContent.bundles.forEach(element => {
        return gulp.src(element.bundle_files)
        .pipe(concat(element.bundle_name + '.js'))
        .pipe(minify(minifyconfig))
		.pipe(gulp.dest('Scripts/Bundles/Js/'));
    });
});

gulp.task('default', [
    'bundle-main-js'
]);