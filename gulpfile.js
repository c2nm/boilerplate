// include modules
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    babelify = require('babelify'),
    buffer = require('vinyl-buffer'),
    browserify = require('browserify'),
    browserSync = require('browser-sync').create(),
    criticalCss = require('gulp-penthouse'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    htmlmin = require('gulp-htmlmin'),
    jest = require('gulp-jest').default,
    rename = require('gulp-rename'),
    runSequence = require('run-sequence'),
    sass = require('gulp-sass'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    vueify = require('gulp-vueify');
    
// external libs
var libs = {
    js: [
        '_plugins/library1/script.js',
        '_plugins/library2/script.min.js'
    ],
    css: [
        '_plugins/library2/style.min.css'
    ]
}

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

// css (critical)
gulp.task('css-critical', function () {
    return gulp.src('./_build/bundle.css')
        .pipe(criticalCss({
            out: 'build-critical.css',
            url: 'http://www.tld.local',
            width: 1920,
            height: 1080,
            strict: true,
            userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
        }))
        .pipe(gulp.dest('./_build/'));
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
        .pipe(uglify()).on('error', function(e){ console.log(e); })
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

// libs
gulp.task('js-libs', function()
{
  return gulp
        .src(libs.js.concat(['_build/bundle.js']))
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./_build/'));
});
gulp.task('css-libs', function()
{
  return gulp
        .src(libs.css.concat(['_build/bundle.css']))
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('./_build/'));
});

// watch
gulp.task('watch', function()
{
    gulp.watch('./_html/*.html', function() { runSequence('html'); });
    gulp.watch('./_scss/**/*.scss', function() { runSequence('css','css-libs','css-critical'); });
    gulp.watch('./_js/*.js', function() { runSequence('js','js-babel','js-test','js-libs'); });
    gulp.watch('./_tests/_js/*.js', function() { runSequence('js-test'); });
    gulp.watch('./_vue/*.vue', function() { runSequence('vue','js','js-babel','js-test','js-libs'); });
    //browserSync.init({ proxy: 'www.tld.local' });
});

// default
gulp.task('default', function()
{
    runSequence('html','css','css-libs','css-critical','js','js-babel','js-test','vue','js-libs','watch');   
});