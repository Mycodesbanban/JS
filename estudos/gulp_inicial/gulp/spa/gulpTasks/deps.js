const gulp = require("gulp")
const uglifycss = require("gulp-uglifycss")
const concat = require("gulp-concat")

function depsCSS(callback){
    return gulp.src("node_modules/font-awesome/css/font-awesome.css") // caminho 
        .pipe(uglifycss({"uglyComments":false})) // remove quebras de linha em comentários preservados; por padrão, as quebras de linha são preservadas
        .pipe(concat("deps.min.css")) //o arquivo que vai ser criado
        .pipe(gulp.dest("build/assets/css")) // destino onde o arquivo vai ser colocado

}
function depsFontes( callback){
    return gulp.src("node_modules/font-awesome/fonts/*.*") // caminho 
    .pipe(gulp.dest("build/assets/fonts")) // destino

    // *.*: significar o que 
}

module.exports = {
    depsCSS , 
    depsFontes , 

}

//*.*: todos os arquivos dentro da pasta, independente do tipo

// uglifycss:é uma porta do YUI Compressor para NodeJS para sua parte CSS , Como o YUI CSS Compressor, ele aplica muitas substituições de regexp. Observe que uma porta para JS também está disponível no repositório do YUI Compressor. (gulp)

//uglyComments:  remove quebras de linha em comentários preservados; por padrão, as quebras de linha são preservadas

// concat : Isso irá concatenar arquivos pela quebra de linha do seu sistema operacional. Ele pegará o diretório base do primeiro arquivo que passar por ele. (gulp ee)

