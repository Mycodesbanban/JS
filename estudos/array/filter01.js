const { filter } = require("lodash");

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
//.filter() é usado para criar um novo array com todos os elementos que passam em uma condição especificada por uma função de teste tambem é uma forma de filtar um array.
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

// Todo: tente retornar apenas numeros maiores que 10

const numeros = [5 , 50 , 80 , 1 , 2,3 , 5 , 8 , 7 , 11 , 15 , 22 , 27]

const OutroArray = numeros.filter(function(numeros){
    return numeros >=10
})
console.log(OutroArray)





// Todo:retorne as pessoas que tem o nome com mais de 5 letras
// Todo:retorne as pessoas com mais de 50 anos
// Todo:retorne as pessoas cujo o nome termina com a
const pessoas = [
    {nome:"joão" , idade:573},
    {nome:"maysa" , idade:34},
    {nome:"maycon" , idade:33},
    {nome:"meliodas" , idade:5},
    {nome:"maria" , idade:55},
] 
const filtrarNomeeIdade = pessoas.filter((valor) =>{
    return valor.nome.length >= 5 && valor.idade >= 50 
})
console.log(filtrarNomeeIdade)