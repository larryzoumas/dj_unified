const gulpfile = require('gulp');
const cachebust = require('gulp-cache-bust');
const fs = require('fs');
const path = require('path');

gulpfile.src('./wwwroot/js/includes.js')
   .pipe(cachebust({
     type: 'timestamp'
   })).pipe(gulpfile.dest('./wwwroot/js/'));

gulpfile.task('cachebust', function (done) {
    // Process the root HTML files
    gulpfile.src('./wwwroot/*.html')
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(gulpfile.dest('./wwwroot/'))
        .on('end', function () {
            // Find all module directories dynamically
            const moduleDirectories = fs.readdirSync('./wwwroot/modules')
                .filter(item => fs.statSync(path.join('./wwwroot/modules', item)).isDirectory());

            // Process HTML files in each module directory
            moduleDirectories.forEach((moduleName) => {
                gulpfile.src(`./wwwroot/modules/${moduleName}/index.html`)
                    .pipe(cachebust({
                        type: 'timestamp'
                    }))
                    .pipe(gulpfile.dest(`./wwwroot/modules/${moduleName}/`));
            });

            done(); // Signal task completion
        });

    // Process the root HTML files
    gulpfile.src('./wwwroot/js/includes.js')
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(gulpfile.dest('./wwwroot/js'))
        .on('end', function () {
            // Find all module directories dynamically
            const moduleDirectories = fs.readdirSync('./wwwroot/modules')
                .filter(item => fs.statSync(path.join('./wwwroot/modules', item)).isDirectory());

            // Process HTML files in each module directory
            moduleDirectories.forEach((moduleName) => {
                gulpfile.src(`./wwwroot/modules/${moduleName}/index.html`)
                    .pipe(cachebust({
                        type: 'timestamp'
                    }))
                    .pipe(gulpfile.dest(`./wwwroot/modules/${moduleName}/`));
            });

            done(); // Signal task completion
        });
});


gulpfile.task('cachebust_ug', function (done) {
    // Process the root HTML files
    gulpfile.src('./wwwroot/jobbguide/*.html')
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(gulpfile.dest('./wwwroot/jobbguide/'))
        .on('end', function () {
            // Find all module directories dynamically
            const moduleDirectories = fs.readdirSync('./wwwroot/jobbguide/modules')
                .filter(item => fs.statSync(path.join('./wwwroot/jobbguide/modules', item)).isDirectory());

            // Process HTML files in each module directory
            moduleDirectories.forEach((moduleName) => {
                gulpfile.src(`./wwwroot/jobbguide/modules/${moduleName}/index.html`)
                    .pipe(cachebust({
                        type: 'timestamp'
                    }))
                    .pipe(gulpfile.dest(`./wwwroot/jobbguide/modules/${moduleName}/`));
            });

            done(); // Signal task completion
        });

    // Process the root HTML files
    gulpfile.src('./wwwroot/jobbguide/js/includes.js')
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(gulpfile.dest('./wwwroot/jobbguide/js'))
        .on('end', function () {
            // Find all module directories dynamically
            const moduleDirectories = fs.readdirSync('./wwwroot/jobbguide/modules')
                .filter(item => fs.statSync(path.join('./wwwroot/jobbguide/modules', item)).isDirectory());

            // Process HTML files in each module directory
            moduleDirectories.forEach((moduleName) => {
                gulpfile.src(`./wwwroot/jobbguide/modules/${moduleName}/index.html`)
                    .pipe(cachebust({
                        type: 'timestamp'
                    }))
                    .pipe(gulpfile.dest(`./wwwroot/jobbguide/modules/${moduleName}/`));
            });

            done(); // Signal task completion
        });
});

gulpfile.task('copy-chartjs', () => {
  return gulpfile.src('node_modules/chart.js/dist/chart.umd.js')
    .pipe(gulpfile.dest('js/vendor'));
});

gulpfile.task('copy-fitvids', () => {
  return gulpfile.src('node_modules/fitvids/dist/fitvids.min.js')
    .pipe(gulpfile.dest('js/vendor'));
});

gulpfile.task('copy-jquery', () => {
  return gulpfile.src('node_modules/jquery/dist/jquery.min.js')
    .pipe(gulpfile.dest('js/vendor'));
});

gulpfile.task('copy-flexslider', () => {
  return gulpfile.src('node_modules/flexslider/jquery.flexslider-min.js')
    .pipe(gulpfile.dest('js/vendor'));
});

gulpfile.task('copy-jquery-inview', () => {
  return gulpfile.src('node_modules/jquery-inview/jquery.inview.min.js')
    .pipe(gulpfile.dest('js/vendor'));
});

gulpfile.task('copy-scrollto', () => {
  return gulpfile.src('node_modules/jquery.scrollto/jquery.scrollTo.min.js')
    .pipe(gulpfile.dest('js/vendor'));
});

gulpfile.task('copy-gsap', () => {
  return gulpfile.src('node_modules/gsap/dist/gsap.min.js')
    .pipe(gulpfile.dest('js/vendor'));
});

// Define default task
gulpfile.task('default', gulpfile.parallel('cachebust' , 'cachebust_ug', 'copy-jquery', 'copy-scrollto', 'copy-chartjs', 'copy-fitvids', 'copy-flexslider', 'copy-gsap', 'copy-jquery-inview'));
