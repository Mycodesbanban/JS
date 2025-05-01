const gulp = require("gulp")
const webserve = require("gulp-webserver") 
const watch = require ("gulp-watch")


function servidor (){
    return gulp.src("build")
        .pipe(webserve({
            port:8080 ,  // porta do serve 
            open:true ,  // se quer que abrimos o browser/navegador
            livereload: true, // reniciar se automaticamente 
        }))
    
}
function monitorarArquivos(callback){
    watch("src/**/*.html" , () => gulp.series("appHTML")()) // se o algum .html for alterado executa a tarefa appHTML 
    watch("src/**/*.js" , () => gulp.series("appJS")()) // se algum .js for alterado executa a tarefa executa o appJS 
    watch("src/**/*.scss" , () => gulp.series("appCSS")()) // se algum .scss for alterado executa a tarefa appCSS
    watch("src/assets/imgs/**/*.*" , () => gulp.series("appIMG")()) // se qualquer arquivo dentro de imgs for alterado executa o appIMG
    
    return callback() // falando para o gulp que a tarefa acabou 

}

module.exports = {
    monitorarArquivos , 
    servidor , 
}


// webserver (gulp) : iniciar um servidor local com suporte a LiveReload, navegação automática e fallback para aplicações SPA

// open (gulp-webserver) : abre o servidor pelo o navegador 

// port (gulp-webserver) : o numero da porta que vamos escolher  

// livereload (gulp-webserver) : faz um reload na pagina se alguma coisa for mudada

// watch (gulp-watch) : Permite observar globos e executar uma tarefa quando uma alteração ocorre. As tarefas são tratadas uniformemente com o restante do sistema de tarefas/Quando você modifica um arquivo, ele executa automaticamente uma tarefa que você escolher.

// gulp.task():Define uma tarefa dentro do sistema de tarefas. A tarefa pode então ser acessada a partir da linha de comando e das APIs series(), parallel() e lastRun() / como dar um nome para um bloco de código que faz alguma coisa, para você poder chamar e reutilizar depois.

