var gulp = require('gulp');

// Assets directory
var assetsDevelopment = 'assets/';
var assetsProduction = 'distribution/';

// Application directory
var appDev = 'dev/';
var appProd = 'distribution/';

var ext_replace = require('gulp-ext-replace');

// SCSS modules
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var cssnano = require('cssnano');
var partialImport = require('postcss-partial-import');
var sass = require('gulp-sass');

// Images modules
var imagemin = require('gulp-imagemin');

// Build scss >> css
gulp.task('build-css', function () {
    return gulp.src(appDev + '**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(ext_replace('.css'))
        .pipe(gulp.dest(assetsProduction));
});

// Minify image (compress)
gulp.task('build-img', function () {
    return gulp.src(assetsDevelopment + 'img/**/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('src/img/'));
});

// Build HTM (move from dev directory in to distribution directory)
gulp.task('build-html', function () {
    return gulp.src(appDev + '**/*.html')
        .pipe(gulp.dest(appProd));
});

// Set watchers (build-ts is disabled)
gulp.task('watch', function () {
    gulp.watch(assetsDevelopment + 'scss/**/*.scss', ['build-css']);
    gulp.watch(appDev + '**/*.html', ['build-html']);
    gulp.watch(assetsDevelopment + 'img/*', ['build-img']);
});

// On startup build everything and set watcher
gulp.task('default', ['watch', 'build-css', 'build-html', 'build-img']);

gulp.task('build', ['build-css', 'build-html', 'build-img']);