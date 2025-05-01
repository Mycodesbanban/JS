const gulp = require("gulp") // importando o gulp
const babel = require("gulp-babel") // importando o babel
const {series , parallel} = require("gulp") // importando o series e o parallel
const sass = require("gulp-sass")(require("sass")) // importando o sass 
const uglifycss = require("gulp-uglifycss") // importando o uglifycss
const concat = require("gulp-concat") // importando o concat
const htmlmin = require("gulp-htmlmin") // importando o htmlmin
const uglify = require("gulp-uglify") // importando o ugfify

function AppHTML(){
    return gulp.src("src/**/*.html") // chamando todos os arquivos que tenha o .html
        .pipe(htmlmin({collapseWhitespace: true})) // tira os espaçoes em branco como quebras de linhas 
        .pipe(gulp.dest("build")) // destino 
}

function AppCSS(){
    return gulp.src("src/assets/sass/index.scss")
    .pipe(sass().on("error" , sass.logError)) // tratar um erro caso houver 
    .pipe(uglifycss({"uglyComments":true})) // minifica o css (remove os comentários )
    .pipe(concat("app.min.css")) // junta todos os estilos em um só arquivo
    .pipe(gulp.dest("build/assets/css")) //destino
}

function AppJS(){
    return gulp.src("src/assets/js/**/*.js")
        .pipe(babel({presets:["env"]})) // coloca para uma versão compativel (ex:Es5) 
        .pipe(uglify()) // minifica os arquivos js (remove espaçoe e renomeia variaveis)
        .pipe(concat("app.min.js")) // Junta tudo em um unico arquivo
        .pipe(gulp.dest("build/assets/js")) // destino
}

function AppIMG(){
    return gulp.src("src/assets/imgs/**/*.*") // pega todos os arquivos
    .pipe(gulp.dest("build/assets/img")) //destino 
}

gulp.task("appHTML" , AppHTML) // define a função appHTML 
gulp.task("appIMG" , AppIMG) // define a função appIMG 
gulp.task("appJS" , AppJS) // define a função appJS
gulp.task("appCSS", AppCSS) // define a função appCSS

module.exports = { 
    AppHTML , 
    AppCSS ,
    AppJS , 
    AppIMG 
}

// htmlmin: Um minificador HTML simples 

//sass:  é uma linguagem de extensão do CSS que permite escrever estilos de forma mais eficiente, organizada e reutilizável.

//collapseWhitespace: Remove espaços em branco desnecessários no HTML (como quebras de linha, tabs, espaços extras), resultando em HTML mais compacto.

// uglify: é um plugin do Gulp que minifica arquivos JS. Ele remove espaços, comentários e reduz nomes de variáveis/funções para deixar os arquivos menores e mais rápidos para carregar no navegador.

// babel:  é uma ferramenta de compilação de código fonte que permite a conversão de código moderno para versões compatíveis com navegadores mais antigos

// babel(presents) : Presets são conjuntos de plugins Babel que transformam sintaxes específicas do JS eles facilitam a configuração porque evitam que você precise listar plugin por plugin
