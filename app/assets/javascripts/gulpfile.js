const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps')
const sassGlob = require('gulp-sass-glob')
const path = require('path')
const autoprefixer = require('gulp-autoprefixer')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const rename = require('gulp-rename');
const replace = require('gulp-replace');

var paths = {
    components: path.join(__dirname, '/components/'),
    assets: path.join(__dirname, '/assets/'),
    general_sass: path.join(__dirname, '/src/scss/'),
    custom_sass: path.join(__dirname, 'scss/'),
}

gulp.task('default', [
    'build-js'
])

gulp.task('build-js', function() {
    return gulp
        .src([
            'node_modules/babel-polyfill/dist/polyfill.js',
            'node_modules/stickyfilljs/dist/stickyfill.min.js',
            // TODO: If we need to use design-component date-picker, the following line should be uncommented and then the conflict between Drupal jquery and this one needs to be fixed
            // 'node_modules/jquery/dist/jquery.min.js',
            'node_modules/foundation-datepicker/js/foundation-datepicker.min.js',
            'node_modules/foundation-datepicker/js/locales/foundation-datepicker.da.js',
            paths.assets + 'js/**/*.js',
            paths.components + '**/*.js',
            // TODO: If we need to use design-component date-picker, the following two lines need to be removed and then the conflict between Drupal jquery and this one needs to be fixed
            '!' + paths.components + 'molecules/date-picker/date-picker.js',
            '!' + paths.components + 'molecules/float-label-input/float-label-input.js',
            // Remove from kbdk because it generates a javascript error, instead we use the filter-buttons.js under rdltheme/js/organisms/filter-btn-group.
            '!' + paths.components + 'organisms/filter-btn-group/filter-buttons.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(
            babel({
                presets: ['es2015-ie'],
            })
        )
        .on('error', onError)
        .pipe(concat('script.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('transpiled_components/'))
})


function onError(error) {
    console.log("ERROR:", error.message)
    if (error.plugin) {
        console.log('Plugin: ' + error.plugin)
    }
    this.emit('end')
}
