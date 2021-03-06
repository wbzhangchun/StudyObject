var gulp=require('gulp'),
    less=require('gulp-less'),
    uglify=require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    htmlmin=require('gulp-htmlmin'),
    del=require('del'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;
//转换less——>css
gulp.task('testLess', function () {
    return gulp.src('./less/index.less')
           .pipe(less())
           .pipe(gulp.dest('dest/styles'))
});

//压缩html,去除空格 注释
gulp.task('testPage', function() {
    var options = {
        collapseWhitespace: true,
        removeComments: true,
    }
    return gulp.src('./*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dest/'))
});

//创建压缩任务

gulp.task('testScripts', function() {
  return gulp.src('js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dest/scripts'))
});
//图片压缩

gulp.task('testImages', function() {
    gulp.src('image/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dest/images'))
});

// 清除上一次记录

gulp.task('clean', function(cb) {
  return del(['dest/images', 'dest/scripts', 'dest/styles','dest/*.html'], cb)
});

// 默认任务

gulp.task('default',['clean'],function(cb) {
    gulp.start('testPage','testLess', 'testScripts','testImages');
});

//监听窗口

gulp.task('testWatch',function(){
	//监听less文件夹
	gulp.watch('less/**/*.less',['testLess'])
	//监听js文件夹
	gulp.watch('js/**/*.js',['testUglify'])

})
/*实时监控*/
gulp.task("watch", function() {
    browserSync.init({
        files: [
            "./dest/*/*.html",
            "./dest/*/*.css",
            "./dest/*/*.js"
        ],
        logLevel: "debug",
        logPrefix: "insgeek",
        server: {
            /*这里写的是html文件相对于根目录所在的文件夹*/
            baseDir: "./dest",
            /*这里如果不写，默认启动的是index.html，如果是其他名字，需要这里写*/
            // index: "insurance_template_statement.html"
            index:"jkxueyuan.html"
        },
        ghostMode: {
            clicks: true,
            forms: true,
            scroll: true
        },
        browser: "chrome"
    });
});
