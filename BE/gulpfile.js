const gulp = require('gulp');
const ts = require('gulp-typescript');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];
const nodemon = require('gulp-nodemon');
const tslint = require('gulp-tslint');

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task("tslint", () =>
    gulp.src("./src/**/*.ts")
        .pipe(tslint({
            formatter: "verbose",
            configuration: "tslint.json"
        }))
        .pipe(tslint.report())
);

gulp.task('scripts', () => {
    gulp.start(['tslint']);
    const tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
    gulp.watch('src/**/*.ts', ['scripts']);
});
gulp.task('serve', function () {
    var options = {
        script: './dist/index.js',
        delayTime: 1,
        env: {
            'PORT': 4000
        },
        watch: 'dist/**/*.js'
    };

    return nodemon(options)
        .on('restart', function (ev) {
            console.log('Restarting....');
        });
});
gulp.task('dev', ['scripts', 'watch', 'serve']);