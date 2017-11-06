const gulp = require('gulp');
const flatten = require('gulp-flatten');
const webserver = require('gulp-webserver');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const annotate = require('gulp-ng-annotate');
const minifyHtml = require('gulp-htmlmin');
const fs = require('fs');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const ts = require('gulp-typescript');
const tslint = require('gulp-tslint');

const tsProject = ts.createProject('tsconfig.json');

gulp.task("tslint", () =>
    gulp.src("./src/**/*.ts")
        .pipe(tslint({
            formatter: "verbose",
            configuration: "tslint.json"
        }))
        .pipe(tslint.report())
);

gulp.task('watch', function () {
    gulp.watch(['./src/**/*.ts'], ['scriptsTs']);
    gulp.watch(['./src/**/*.html'], ['moveDev']);
    gulp.watch(['./src/assets/**/*.scss'], ['sass']);
    gulp.watch(['./src/assets/img/*'], ['img']);
    gulp.watch(['./dependencies.json'], ['buildVendorJS']);
});

gulp.task('scriptsTs', ['scriptsDev'], function () {
    gulp.start(['tslint']);
    const tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('artifacts'));
});

gulp.task('scriptsDev', function () {
    gulp.src(['./artifacts/app.js', './artifacts/**/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/js'));

});

gulp.task('scriptsProd', function () {
    gulp.src(['./artifacts/app.js', './artifacts/**/*.js'])
        .pipe(annotate())
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('moveDev', function () {
    gulp.src(['./src/index.html'])
        .pipe(gulp.dest('./dist'));
    gulp.src(['!./src/index.html', './src/**/*.html'])
        .pipe(gulp.dest('./dist/templates'));
    gulp.src('./src/assets/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('moveProd', function () {
    gulp.src(['./src/index.html'])
        .pipe(minifyHtml({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'));

    gulp.src(['!./src/index.html', './src/**/*.html'])
        .pipe(minifyHtml({ collapseWhitespace: true }))
        .pipe(flatten())
        .pipe(gulp.dest('./dist/templates'));

    gulp.src('./src/assets/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));

    gulp.src('./src/assets/excel/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/excel'));
});

gulp.task('sass', function () {
    gulp.src('./src/assets/scss/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('serve', function () {
    gulp.start(['watch']);
    gulp.src('./dist')
        .pipe(webserver({
            port: 48080,
            livereload: true,
            open: 'http://localhost:48080/'
        }));
});

gulp.task('buildVendorJS', function () {
    var dependencies = JSON.parse(fs.readFileSync('./dependencies.json'));
    gulp.src(dependencies.scripts)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./dist/js'));
    gulp.src(dependencies.styles)
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('dev', ['serve'], function () {
    gulp.start(['scriptsTs', 'moveDev', 'sass', 'buildVendorJS']);
});