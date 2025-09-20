// sem promise
const htpp = require("http") // usando o modulo http
const { constrainedMemory } = require("process")

 const getTurma=(letra , callback)=>{
    const url =`http://files.cod3r.com.br/curso-js/turma${letra}.json`
    htpp.get(url , res =>{
        let resultado = ""

        res.on("data" , dados =>{
            resultado += dados
        })
        res.on("end" , ()=>{
            callback(JSON.parse(resultado))
        })
    })
 }

let nomes= []
getTurma("A" , alunos=>{
    nomes = nomes.concat(alunos.map(a=> `A: ${a.nome}`))
    getTurma("B" , alunos=>{
        nomes = nomes.concat(alunos.map(a =>`B:${a.nome}`))
    getTurma("C" , alunos=>{
        nomes= nomes.concat(alunos.map(a=>`C:${a.nome}`))
    })
    })

})