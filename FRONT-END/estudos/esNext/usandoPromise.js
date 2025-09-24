// com promise 
const http = require("http"); 


const getTurma = letra => {
   
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
   return new Promise ((resolve , reject) =>{
    http.get(url, res => {
        let resultado = ""; 

      
        res.on("data", dados => {
            resultado += dados;
        }); res.on("end", () => {
            try{ // try:O método estático recebe um callback de qualquer tipo (retorna ou lança, sincronamente ou assincronamente) e encapsula seu resultado
                resolve(JSON.parse(resultado))

            }catch(e){
                reject(e)
            } //tratar algum erro
        });
    });

   })
};

let nomes = []; 


getTurma("A").then( alunos => {
  
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`));
    
    getTurma("B").then( alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`));

  
        getTurma("C").then( alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`));

            console.log(nomes);
        });
    });
});

Promise.all([getTurma("A") , getTurma("B") , getTurma("C")]) 
    .then(x => console.log(x)) // recebe um array que dentro dele temos o array das turmas , cada array separado
    .then(turmas=>[].concat(...turmas)) 
    // agora vai juntar os array das turmas 
    .then(alunos=>alunos.map(aluno=>aluno.nome)) // map:cria um novo array preenchido com os resultados da chamada de uma função fornecida em cada elemento do array de chamada
    .then(nomes => console.log(nomes))
    .catch(e=>console.log(e.mesaage))
// Promise.all:recebe um iterável de promessas como entrada e retorna uma única promessa. Esta promessa retornada é cumprida quando todas as promessas de entrada são cumpridas (incluindo quando um iterável vazio é passado), com um array dos valores de cumprimento , no exemplo acima ele vai fazer em uma unica promessa ele vai chamar as três é esperar elas serem resolvidas
