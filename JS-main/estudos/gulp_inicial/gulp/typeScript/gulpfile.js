const {series}= require("gulp") // importa o series
const gulp = require("gulp") // importa o gulp 
const ts = require("gulp-typescript") // Importa o plugin 'gulp-typescript' para compilar arquivos TypeScript
const tsProject = ts.createProject("tsconfig.json") //  Cria um projeto TypeScript baseado nas configurações do 'tsconfig.json'

function TransformacaoTS (){
    return tsProject.src() // pega os arquivos de entrada definidos no tsconfig.json
        .pipe(tsProject()) // compila os arquivos TypeScript para JS 
        .pipe(gulp.dest("buid02")) // Salva os arquivos JS compilados na pasta "buid02" 

}

exports.default= series(TransformacaoTS) // exporta a função como tarefa padrão , executada em sequência