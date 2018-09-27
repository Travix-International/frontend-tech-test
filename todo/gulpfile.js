const gulp = require('gulp');
const gutil = require('gulp-util');
const gulpIf = require('gulp-if');
const argv = require('yargs').argv;
const browserify = require('browserify');
const babelify = require('babelify');
const watchify = require('watchify');
const source = require('vinyl-source-stream');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const server = require('gulp-server-livereload');
const concat = require('gulp-concat');
const clean = require('gulp-clean');

const config = {
  port: process.env.PORT || 3000,
  host: process.env.WEBSITE_HOSTNAME || `localhost`
};

gulp.task('sass', () => {
  return gulp.src(['public/css/globals.scss', 'app/**/*.scss'])
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulpIf(argv.production, csso()))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('public/css'));
});

gulp.task('react', () => {
  return browserify({ entries: 'app/main.js', debug: true })
    .transform('babelify', { presets: ['es2015', 'react'] })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(gulpIf(argv.production, uglify()))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('watchify', () => {
  const bundler = watchify(browserify({ entries: 'app/main.js', debug: true }, watchify.args));
  bundler.transform('babelify', { presets: ['es2015', 'react'] });
  bundler.on('update', rebundle);
  return rebundle();

  function rebundle() {
    const start = Date.now();
    return bundler.bundle()
      .on('error', function (err) {
        gutil.log(gutil.colors.red(err.toString()));
      })
      .on('end', function () {
        gutil.log(gutil.colors.green('Finished rebundling in', (Date.now() - start) + 'ms'));
      })
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('public/js'));
  }
});

gulp.task('serve', (done) => {

  gulp.src('public')
    .pipe(server({
      livereload: {
        enable: true,
        filter: function (filePath, cb) {
          if (/\/public\/js\/bundle.js/.test(filePath)) {
            cb(true);
          }
          else if (/\/public\/css\/main.css/.test(filePath)) {
            cb(true);
          }
        },
      },
      fallback: 'index.html',
      open: true,
      port: config.port,
      host: config.host
    }));
});

gulp.task('watch', () => {
  gulp.watch(['public/css/globals.scss', 'app/**/*.scss'], ['sass']);
});

gulp.task('clean', () => {
  gulp.src('build/*', { read: true })
    .pipe(clean());
});

gulp.task('copy', () => {
  gulp.src(['public/**/*'])
    .pipe(gulp.dest('build/'));
});

gulp.task('build', ['sass', 'react', 'clean', 'copy']);
gulp.task('default', ['build', 'watch', 'watchify', 'serve']);
