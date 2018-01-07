// include modules
var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    vueify = require('gulp-vueify'),
    source = require('vinyl-source-stream'),
    htmlmin = require('gulp-htmlmin'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    buffer = require('vinyl-buffer'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync').create();
	
// js
gulp.task('js', function(){
    return browserify({
        entries: ['./_js/script.js']
    })
    .transform(babelify.configure({
        presets : ['es2015', 'es2017'],
        plugins : ['transform-runtime']
    }))
    .bundle()
    .on('error', function(err) { console.log(err.toString()); this.emit('end'); })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./_build'))
    .pipe(browserSync.reload({stream: true}));
});

// css
gulp.task('css', function(){
    return gulp.src('./_scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            precision: 2
        }))
        .on('error', function(err) { console.log(err.toString()); this.emit('end'); })
        .pipe(autoprefixer({
            browsers: ['ie 9-10', 'last 2 versions']
        }))
        .pipe(sourcemaps.write())
        .pipe(rename('bundle.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./_build'))
        .pipe(browserSync.stream());
});

// html
gulp.task('html', function() {
  return gulp.src('./_html/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .on('error', function(err) { console.log(err.toString()); this.emit('end'); })
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({stream: true}));
});

// vue
gulp.task('vue', function () {
  return gulp.src('./_vue/**/*.vue')
    .pipe(vueify())
    .pipe(gulp.dest('./_vue'));
});

// watch
gulp.task('watch', function() {
	browserSync.init({ proxy: 'www.tld.local' });
    gulp.watch('./_js/*.js', ['js']);    
    gulp.watch('./_scss/**/*.scss', ['css']);
    gulp.watch('./_html/*.html', ['html']);
    gulp.watch('./_vue/*.vue', function() {
        runSequence('vue','js');
    });
});

// default
gulp.task('default', ['js','css','html','vue','watch']);