const fs= require("fs")
const path= require("path")


function leraquivo(caminho){
    return new Promise(resolve=>{
        fs.readFile(caminho , function(_ , conteudo){ // vai ler o arquivo
            resolve(conteudo.toString())
        })
        console.log("depois de ler ")
    })
}
const caminho = path.join(__dirname , "dado.txt")
leraquivo(caminho)
.then(conteudo => conteudo.split("\n"))
.then(linhas => console.log(linhas.join(',')))
.then(conteudo => `O valor final é ${conteudo}`)
.then(console.log)