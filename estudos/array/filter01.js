// Filter 01#
const produto = [
    {Nome:"Notebook" , preco:3825 , fragil:true},
    {Nome:"IPad" , preco:3282, fragil:true},
    {Nome:"copo de vidro" , preco:2.38, fragil:true},
    {Nome:"copo de plastico" , preco:2 , fragil:false}
]
console.log(produto.filter(function(p){
    return false  

    
})); 
let caro= produto => produto.preco >=500
let fragil =  produto => produto.fragil 
let resultado = produto.filter(caro).filter(fragil)
console.log(resultado); // produtos fragil e caro acima de 500 reais
//.filter() é usado para criar um novo array com todos os elementos que passam em uma condição especificada por uma função de testeé tambem é uma forma de filtar um array.
// seus parametros são:
// callback
// Função é um predicado, para testar cada elemento do array. Retorna true para manter o elemento, false caso contrário, recebendo três argumentos:

// element
// O elemento que está sendo processado no array.

// index
// O índice do elemento atual que está sendo processado no array.

// array
// O array para qual filter foi chamada.

// thisArg Optional
// Opcional. Valor a ser usado como this durante a execução do callback.