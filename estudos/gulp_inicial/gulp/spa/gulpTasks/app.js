const gulp = require("gulp") // importando o gulp
const babel = require("gulp-babel")
const {series , parallel} = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const uglifycss = require("gulp-uglifycss")
const concat = require("gulp-concat")
const htmlmin = require("gulp-htmlmin")
const uglify = require("gulp-uglify")

function AppHTML(){
    return gulp.src("src/**/*.html")
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("build"))
}

function AppCSS(){
    return gulp.src("src/assets/sass/index.scss")
    .pipe(sass().on("error" , sass.logError)) // pesquisar 
    .pipe(uglifycss({"uglyComments":true})) 
    .pipe(concat("app.min.css"))
    .pipe(gulp.dest("build/assets/css"))
}

function AppJS(){
    return gulp.src("src/assets/js/**/*.js")
        .pipe(babel({presets:["env"]})) // pesquisar 
        .pipe(uglify()) // pesquisar 
        .pipe(concat("app.min.js")) // pesquisar
        .pipe(gulp.dest("build/assets/js"))
}

function AppIMG(){
    return gulp.src("src/assets/imgs/**/*.*")
    .pipe(gulp.dest("build/assets/img"))
}


module.exports = { 
    AppHTML , 
    AppCSS ,
    AppJS , 
    AppIMG 
}

// htmlmin:

//sass:

//collapseWhitespace:

