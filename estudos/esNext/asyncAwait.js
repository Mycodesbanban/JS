
const http = require("http"); 


const getTurma = letra => {
   
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
   return new Promise ((resolve , reject) =>{
    http.get(url, res => {
        let resultado = ""; 

      
        res.on("data", dados => {
            resultado += dados;
        }); res.on("end", () => {
            try{ // 
                resolve(JSON.parse(resultado))

            }catch(e){
                reject(e)
            } 
        });
    });

   })
};

// Objetivo de simplificar o uso de promises
let obteralunos=async()=>{ // async:A declaração cria uma ligação de uma nova função assíncrona a um nome dado
    const ta=await getTurma("A")//await: espera o resultado de uma Promise
    const tb=await getTurma("B")
    const tc=await getTurma("C")
    return[].concat(ta , tb , tc) // retorna um objeto AsyncFunction  , em cima de AsyncFunction chamando  o .then
}
obteralunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
