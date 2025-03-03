// Reduce 01
//reduce()  é um método de array que executa uma função de redução sobre os elementos de um array, de forma a produzir um único valor , esse método recebe uma função de callback como argumento e um valor inicial opcional para o acumulador.
//seus parametros são
// acumulador: O valor acumulado retornado pela última execução da função de callback (ou o valor inicial na primeira execução).

// valorAtual: O valor do elemento atual que está sendo processado no array.

// indice (opcional): O índice do elemento atual.

// array (opcional): O array original.

const alunos = [
    {Nome:"Pedro" , idade:37 , curso:"geografia" , nota:1.2 , bolsita:true},
    {Nome:"Maycon" , idade:15 , curso:"Web mordeno" , nota:9.2 , bolsita:true},
    {Nome:"Maysa" , idade:15 , curso:undefined , nota:null , bolsita:false}

]
console.log(alunos.map(a => a.nota))
const resultado=alunos.map(a =>a.nota).reduce(function(acumulador , valorAtual){
    console.log(acumulador , valorAtual)
    return acumulador + valorAtual
} , 10 ) // usamos uma função arrow com um retorno implicito , o 10 vai ser o valor inicial 
console.log(resultado);
