// Reduce 01
//*reduce()  é um método de array que executa uma função de redução sobre os elementos de um array, de forma a produzir um único valor , esse método recebe uma função de callback como argumento e um valor inicial opcional para o acumulador.
//*seus parametros são:

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




// reduce(): é muito usada para reduzir um array para um unico elemento
const numero = [5 , 50 , 80 , 1 ,2 , 3 , 5 , 8 , 7 , 11 , 20 , 40]
const total = numero.reduce((acumulador , valor , indice , array)=>{
    acumulador = acumulador + valor // soma todos os valores
    return acumulador
} ,0) //Todo: o Valor que o acumulador vai receber (opcional )
// ! Aviso caso o acumulador não receba o valor  , ele vai pega o valor incial na primeira execução
console.log(total)

// criando numeros pares
const pares = numero.reduce((acumulador ,valor) =>{
   valor % 2 === 0 ? acumulador.push(valor) : console.log("chore")
    return acumulador
},[]) // passando o valor do acumulador um array vazio 
console.log(pares)





// *Pessoas velhas:
const pessoas =[
    {nome:"maycon" , idade:40}, 
    {nome:"maria" , idade: 80}, 
    {nome:"sophia" , idade:846}, 
    {nome:"edson" , idade:93838}, 
    {nome:"maysa" , idade:4783483}, 
]

const oldGuys = pessoas.reduce((acumulador , valor)=>{
    if(valor.idade >= 40){
     acumulador.push(valor)
    } 
     return acumulador
}, [])
console.log(oldGuys)