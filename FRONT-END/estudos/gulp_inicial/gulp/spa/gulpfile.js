const {series  , parallel} = require("gulp") // importa o series e o paraleu
const gulp = require("gulp")

const { AppHTML ,  AppCSS ,AppJS , AppIMG } = require("./gulpTasks/app") // chamando as funções 
const {depsCSS , depsFontes} = require("./gulpTasks/deps") // chamando as funções 
const { monitorarArquivos, servidor } = require("./gulpTasks/servidor") // chamando as funções 

module.exports.default = series( // Exporta a tarefa padrão, executada com o comando 'gulp'
    parallel( // Executa dois grupos de tarefas ao mesmo tempo
        series(AppHTML , AppCSS , AppJS , AppIMG) ,  // Grupo 1: tarefas do app executadas em sequência
        series(depsCSS , depsFontes) //  Grupo 2: tarefas de dependências executadas em sequência

    ),
    servidor ,  // inicia o sevidor
    monitorarArquivos // monitorar os arquivos
)
