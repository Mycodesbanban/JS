const {series} = require("gulp")
const gulp = require("gulp")
const concat = require("gulp-concat")
const uglify = require("gulp-uglify")
const babel = require ("gulp-babel")
// gulp-concat:isso irá concatenar arquivos pela quebra de linha do seu sistema operacional/ é um plugin que concatena arquivos em um único arquivo. Ele pegará o diretório base do primeiro arquivo que passar por ele.Os arquivos serão concatenados na ordem em que são especificados na função gulp.src

// gulp-uglify: é utilizado para minificar arquivos JavaScript, reduzindo seu tamanho e melhorando o desempenho do carregamento

// gulp-babel: permite você ultilizar a próxima geração do JS (ES6+) hoje, transpiling para uma versão compatível com navegadores atuais

function padrao(callback){

   return gulp.src("src/**/*.js") // estamos chamando os arquivos 
        .pipe(babel({
            comments: false , // os arquivos de comentarios não vão ser transferido para o arquivo final
            presets:["env"] , //adaptar o js para diferentes navegadores 

        }))
        .pipe(uglify()) // minifica (comprime) o JS tirando espaços ,quebras de linha etc
        .pipe(concat("codigo.min.js")) //junta todos os arquivos em um só chamado codigo.min.js
        .on("error" , err => console.log(err)) // se der erro no meio do processo exibe o resultado de erro
        .pipe(gulp.dest("build")) // salva o arquivo em uma pasta build
        
    return callback() // podemos chamar assim tambem 
}
function fim (callback){
    console.log("fim") // mostra o fim do processo no terminal
    return callback() // informa para o gulp que a tarefa terminou

}


module.exports.default= series(padrao , fim ) // primeiro executa o padrão e depois mostra o fim no terminal

// comments:no Babel controla se os comentários dos arquivos de origem serão incluídos no código transpilado. Por padrão, essa opção está definida como true. Ao definir como false, os comentários serão removidos do código de saída.

// presets:no Babel são conjuntos de plugins que permitem transformar o código de acordo com o ambiente de destino. O preset mais comum é o @babel/preset-env, que permite usar as últimas funcionalidades do JS, convertendo-as para versões compatíveis com navegadores mais antigos

//.on:escuta eventos que acontecem enquanto o Gulp está rodando tarefas