 
// Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número 
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada 
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se 
// o valor do elemento for maior que 5.
function receber(valores , num){
    let resultado=[]
    for (let i = 0 ; i  < valores.length; i++){
        resultado.push(valores[i] * num)

    }
    return resultado
}

function recebem(valores , num){
    let resultado=[]
    for(let i =0 ; i < valores.length;i++){
        if(valores[i] > 5){
            resultado.push(valores[i]*num);
        }
    }
     return resultado

}
let valores1=[ 1, 2, 3, 34, 4, 45, 5 ]
let numero=2
let resulado= receber(valores1 , numero)
console.log("O resultado da multiplicação de todos os elementos são" , resulado)
let resulato2=recebem(valores1 , numero)
console.log("resultados da multiplicação maiores que 5" , resulato2)