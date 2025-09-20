
const gulp = require("gulp") 
const {series , parallel}=require("gulp")
//  parallel: Combina funções de tarefas e/ou operações compostas em operações maiores que serão executadas simultaneamente


function copiar (callback){
    // gulp.src(["pastaA/arquivo1.txt" , "pastaA/arquivo2.txt"]) // acessando os dois arquivos
    gulp.src("pastaA/**/*.txt") // qualquer arquivo que esteja na pasta A e tenha a extensão .txt
        .pipe(gulp.dest("pastaB"))
    return callback() 

    // src(): Cria um fluxo para ler objetos Vinyl do sistema de arquivos.Observação: BOMs (marcas de ordem de bytes) não têm utilidade em UTF-8 e serão removidos de arquivos UTF-8 lidos por src(), a menos que desativado usando a opção removeBOM / selecionar arquivos.

    // pipe(): é usado para encadear tarefas no Gulp.Ou seja:Pega o resultado de uma etapa e passa para a próxima.
    
    // dest(): destino do arquivo/ para onde ele vai
}


module.exports.default= series(  
    copiar, // depois o copiar 
) 