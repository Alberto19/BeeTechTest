// CORE
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

// CSS
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// JAVASCRIPT
var uglify = require('gulp-uglify');
var pump = require('pump');

// IMAGE
var imagemin = require('gulp-imagemin');

// TASK - CSS
gulp.task('css', function() {
    return gulp.src('public/css/scss/style.scss')

        // MAP
        .pipe(sourcemaps.init())

        // SASS
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))

        // AUTOPREFIXER
        .pipe(autoprefixer({
            // BROWSERS - SUPPORT
            browsers: [
                'Chrome >= 35',
                'Firefox >= 31',
                'Edge >= 12',
                'Explorer >= 9',
                'iOS >= 8',
                'Safari >= 8',
                'Android 2.3',
                'Android >= 4',
                'Opera >= 12'
            ],
            cascade: false
        }))

        // MAP OUTPUT
        .pipe(sourcemaps.write('.'))

        .pipe(gulp.dest('public/css/dist/'));
});

gulp.task('css:watch', function() {
    gulp.watch('public/css/scss/**/*.scss', ['css']);
});

// TASK - JAVASCRIPT
gulp.task('js', function(cb) {
    pump([
        gulp.src([
            'public/app.js',
            'public/app.routes.js',
            'public/configs/config.js',
            'public/services/*.js',
            'public/components/js/*.js',
            'public/controllers/*.js'
        ]),
        concat('script.js'),
        sourcemaps.init(),
        // uglify(),
        sourcemaps.write('.'),
        gulp.dest('public/js')
    ],
        cb
    );
});

gulp.task('js:watch', function() {
    gulp.watch(
        [
            'public/app.js',
            'public/app.routes.js',
            'public/configs/config.js',
            'public/services/*.js',
            'public/components/js/*.js',
            'public/controllers/*.js'
        ], ['js']
    );
});

// TASK - IMAGE
gulp.task('imagemin', function() {
    return gulp.src(
        [
            'public/images/**/*.jpg',
            'public/images/**/*.png',
            'public/images/**/*.gif'
        ]
    )
        .pipe(imagemin())
        .pipe(gulp.dest('public/image'));
});

// TASK - DEFAULT
gulp.task('default', ['css:watch', 'js:watch'], function() { });
