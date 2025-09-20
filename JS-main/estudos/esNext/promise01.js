function falarDepoisde(segundos, frase){
    return new Promise((resolve, reject) =>{ // promise: é um objeto que representa uma operação assíncrona, que pode estar pendente, resolvida ou rejeitada.
        // resolve: é uma função que sera chamanda quando a promessa for atendida , é aceita apenas 1 parametro
        //reject: quando quer rejeitar o compromisso dessa promessa 

        setTimeout(()=>{
          resolve(frase)
        } , segundos * 1000)

    })
} // essa função recebe dois parametros e retorna uma promessa , Essa promessa esta dentro de um setTimeout e vai simular um tempo de processamento

falarDepoisde(3 , "Que merda")
    .then(frase =>frase.concat("?1?")) 
    .then(outraFrase => console.log(outraFrase))
    .catch(e=>console.log(e))
    //.catch: tratar um erro
    // mostra o a mensagem que criamos com a Promise
    //  concat: dentro de uma arrow function para unir arrays ou strings
     // then: método de instâncias de Promise recebe até dois argumentos: funções de retorno de chamada para os casos de promessa cumprida e rejeitada. Ele armazena as funções de retorno de chamada dentro da promessa em que é chamado e retorna imediatamente outro objeto Promise, permitindo que você encadeie chamadas para outros métodos de promessa


//Todo: Metodos importantes para promises

//* Promise.all: permite executar várias Promises em paralelo e esperar que todas elas terminem (com sucesso ou erro); ex:
const promises = ["primeiro Valor" , 
  falarDepoisde(),
    "outro valor"
];
Promise.all(promises)
.then(valor => console.log(valor))
.catch(err => console.log(err))
// O que está ocorrendo é que vai executar todas as promises ao mesmo tempo


//* Promise.race:executa várias Promises ao mesmo tempo e retorna o resultado da primeira que terminar, seja com sucesso ou erro; ex:

const promises2 = ["primeiro Valor" , 
  falarDepoisde(),
    "outro valor"
];
Promise.race(promises2)
.then(valor => console.log(valor))
.catch(err => console.log(err))

// retorna o primeiro valor seja ele um de sucesso ou erro

//* Promise.resolve: Cria uma promise já resolvida imendiatamente 

//* Promise.reject: cria uma Promise já rejeitada imediatamente com o erro (ou motivo) que você passar.




