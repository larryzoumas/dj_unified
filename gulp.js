const gulp = require('gulp');
const cachebust = require('gulp-cache-bust');
const fs = require('fs');
const path = require('path');

gulp.src('./wwwroot/js/includes.js')
   .pipe(cachebust({
     type: 'timestamp'
   })).pipe(gulp.dest('./wwwroot/js/'));

gulp.task('cachebust', function (done) {
    // Process the root HTML files
    gulp.src('./wwwroot/*.html')
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(gulp.dest('./wwwroot/'))
        .on('end', function () {
            // Find all module directories dynamically
            const moduleDirectories = fs.readdirSync('./wwwroot/modules')
                .filter(item => fs.statSync(path.join('./wwwroot/modules', item)).isDirectory());

            // Process HTML files in each module directory
            moduleDirectories.forEach((moduleName) => {
                gulp.src(`./wwwroot/modules/${moduleName}/index.html`)
                    .pipe(cachebust({
                        type: 'timestamp'
                    }))
                    .pipe(gulp.dest(`./wwwroot/modules/${moduleName}/`));
            });

            done(); // Signal task completion
        });

    // Process the root HTML files
    gulp.src('./wwwroot/js/includes.js')
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(gulp.dest('./wwwroot/js'))
        .on('end', function () {
            // Find all module directories dynamically
            const moduleDirectories = fs.readdirSync('./wwwroot/modules')
                .filter(item => fs.statSync(path.join('./wwwroot/modules', item)).isDirectory());

            // Process HTML files in each module directory
            moduleDirectories.forEach((moduleName) => {
                gulp.src(`./wwwroot/modules/${moduleName}/index.html`)
                    .pipe(cachebust({
                        type: 'timestamp'
                    }))
                    .pipe(gulp.dest(`./wwwroot/modules/${moduleName}/`));
            });

            done(); // Signal task completion
        });
});


gulp.task('cachebust_ug', function (done) {
    // Process the root HTML files
    gulp.src('./wwwroot/jobbguide/*.html')
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(gulp.dest('./wwwroot/jobbguide/'))
        .on('end', function () {
            // Find all module directories dynamically
            const moduleDirectories = fs.readdirSync('./wwwroot/jobbguide/modules')
                .filter(item => fs.statSync(path.join('./wwwroot/jobbguide/modules', item)).isDirectory());

            // Process HTML files in each module directory
            moduleDirectories.forEach((moduleName) => {
                gulp.src(`./wwwroot/jobbguide/modules/${moduleName}/index.html`)
                    .pipe(cachebust({
                        type: 'timestamp'
                    }))
                    .pipe(gulp.dest(`./wwwroot/jobbguide/modules/${moduleName}/`));
            });

            done(); // Signal task completion
        });

    // Process the root HTML files
    gulp.src('./wwwroot/jobbguide/js/includes.js')
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(gulp.dest('./wwwroot/jobbguide/js'))
        .on('end', function () {
            // Find all module directories dynamically
            const moduleDirectories = fs.readdirSync('./wwwroot/jobbguide/modules')
                .filter(item => fs.statSync(path.join('./wwwroot/jobbguide/modules', item)).isDirectory());

            // Process HTML files in each module directory
            moduleDirectories.forEach((moduleName) => {
                gulp.src(`./wwwroot/jobbguide/modules/${moduleName}/index.html`)
                    .pipe(cachebust({
                        type: 'timestamp'
                    }))
                    .pipe(gulp.dest(`./wwwroot/jobbguide/modules/${moduleName}/`));
            });

            done(); // Signal task completion
        });
});

gulp.task('copy-chartjs', () => {
  return gulp.src('node_modules/chart.js/dist/chart.umd.js')
    .pipe(gulp.dest('js/vendor'));
});

gulp.task('copy-fitvids', () => {
  return gulp.src('node_modules/fitvids/dist/fitvids.min.js')
    .pipe(gulp.dest('js/vendor'));
});

gulp.task('copy-jquery', () => {
  return gulp.src('node_modules/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('js/vendor'));
});

gulp.task('copy-flexslider', () => {
  return gulp.src('node_modules/flexslider/jquery.flexslider-min.js')
    .pipe(gulp.dest('js/vendor'));
});

gulp.task('copy-jquery-inview', () => {
  return gulp.src('node_modules/jquery-inview/jquery.inview.min.js')
    .pipe(gulp.dest('js/vendor'));
});

gulp.task('copy-scrollto', () => {
  return gulp.src('node_modules/jquery.scrollto/jquery.scrollTo.min.js')
    .pipe(gulp.dest('js/vendor'));
});

gulp.task('copy-gsap', () => {
  return gulp.src('node_modules/gsap/dist/gsap.min.js')
    .pipe(gulp.dest('js/vendor'));
});

// Define default task
gulp.task('default', gulp.parallel('cachebust' , 'cachebust_ug', 'copy-jquery', 'copy-scrollto', 'copy-chartjs', 'copy-fitvids', 'copy-flexslider', 'copy-gsap', 'copy-jquery-inview'));
