// include modules
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    babelify = require('babelify'),
    buffer = require('vinyl-buffer'),
    browserify = require('browserify'),
    browserSync = require('browser-sync').create(),
    cleanCSS = require('gulp-clean-css'),
    htmlmin = require('gulp-htmlmin'),
    jest = require('gulp-jest').default,
    rename = require('gulp-rename'),
    runSequence = require('run-sequence'),
    sass = require('gulp-sass'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    vueify = require('gulp-vueify');
    
// html
gulp.task('html', function()
{
    return gulp
        .src('./_html/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .on('error', function(err) { console.log(err.toString()); this.emit('end'); })
        .pipe(gulp.dest('./'))
        .pipe(browserSync.reload({stream: true}));
});

// css
gulp.task('css', function()
{
    return gulp
        .src('./_scss/**/*.scss')
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

// js (browser)
gulp.task('js', function()
{
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

// js (tests)
gulp.task('js-test-babel', function()
{
    return browserify({
            entries: ['./_tests/_js/script.js']
        })
        .transform(babelify.configure({
            presets : ['es2015', 'es2017'],
            plugins : ['transform-runtime']
        }))
        .bundle()
        .on('error', function(err) { console.log(err.toString()); this.emit('end'); })
        .pipe(source('bundle.test.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./_tests/_build'));
});
gulp.task('js-test-jest', function()
{   
    return gulp
        .src('_tests/_build')
        .pipe(jest({
            'preprocessorIgnorePatterns': [
                '<rootDir>/dist/', '<rootDir>/node_modules/'
            ],
            'automock': false
        }));
});
gulp.task('js-test', function()
{
    return runSequence('js-test-babel','js-test-jest');
});

// js (babel)
gulp.task('js-babel', function()
{
    /* use this, if you want to export js as a module that
    can be published on npm and/or imported via "import" */
    return gulp
        .src('./_js/*.js')
        .pipe(babel({
            presets : ['es2015', 'es2017'],
            plugins : ['transform-runtime']
        }))
        .pipe(gulp.dest('./_js/_build'));
});

// vue
gulp.task('vue', function()
{
    return gulp
        .src('./_vue/**/*.vue')
        .pipe(vueify())
        .pipe(gulp.dest('./_vue/_build'));
});

// watch
gulp.task('watch', function()
{
    gulp.watch('./_html/*.html', ['html']);
    gulp.watch('./_scss/**/*.scss', ['css']);
    gulp.watch('./_js/*.js', function() { runSequence('js','js-babel','js-test'); });  
    gulp.watch('./_tests/_js/*.js', ['js-test']);
    gulp.watch('./_vue/*.vue', function() { runSequence('vue','js','js-babel','js-test'); });
    //browserSync.init({ proxy: 'www.tld.local' });
});

// default
gulp.task('default', ['html','css','js','js-babel','js-test','vue','watch']);