//* Funções geradoras:
//* são funções que podem pausar sua execução e retomar de onde pararam


function* geradora1 (){ // ! Aviso a função geradoras precisa conter o * para funcionar 
    // Código qualquer 
    yield "valor1"; // pausa a execução e retorna um valor
    // Código qualquer
    yield "valor2"; // pausa a execução e retorna um valor
    // Código qualquer
    yield "valor3" // pausa a execução e retorna um valor 

    // ! Caso usamos o return , ele vai finalizar a função construtora 
}

const g1 = geradora1();
console.log(g1.next()) // Retoma a execução e pega o próximo yield
/* 
* o que vai ser retornado é: 
*{ value:'valor1', // o valor retornado 
* done: false } // fala que a função não acabou , quando a função terminar o valor de false vai ser tornar true
*/

console.log(g1.next().value) // pegando apenas o valor do segundo yield


for (let i of g1){ 
    console.log(i) // retorna cada um dos valores 
}
