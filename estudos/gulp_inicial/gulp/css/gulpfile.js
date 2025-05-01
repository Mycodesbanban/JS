const {series} = require("gulp") // importa a funcão series de dentro do gulp p
const gulp = require("gulp") // importa o gulp 
const sass = require("gulp-sass")(require("sass")) // Usa 'gulp-sass' com o compilador moderno 'sass'
const uglifycss = require("gulp-uglifycss") // / Importa plugin para minificar CSS
const concat = require("gulp-concat") //  Importa plugin para juntar arquivos em um único

function transformacaoCSS (){
    return gulp.src("src/sass/index.scss") // Lê o arquivo SCSS
        .pipe(sass().on("erro" , sass.logError)) // compila SCSS para CSS e trata erro 
        .pipe(uglifycss({ "uglyComments": true })) //  Minifica o CSS
        .pipe(concat("estilo.min.css")) // cria um arquico assim 
        .pipe(gulp.dest("build/css")) // destino onde deve ser colocado 
}


function CopiarHTML (){
    return gulp.src("src/index.html") // destino
    .pipe(gulp.dest("build")) // onnde deve ser colocado
}
 exports.default = series(CopiarHTML) // exportação
exports.default = series(transformacaoCSS) // exportação