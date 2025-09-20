// agora vamos o usar o array dentro de um parametro de uma função
function rand ([min=0, max=1000]){
    if (min > max) [ min , max]= [max , min ]
    const valor = Math.random () * (max - min) + min
    return Math.floor(valor)
}
// fizemos um codigo base , vimos que usamos a tag if que signifa A estrutura condicional if permite ao JavaScript executar um trecho de código somente se uma determinada condição for verdadeira.
console.log(rand([50, 40]))
// podemos passar somente o primeiro
console.log(rand([989]))
// podemos passar somente o segundo 
console.log(rand([, 10]))
// podemos passar um array sozinho
console.log(rand([]))
// quando tiramos um array o resultado vai ser undefined
console.log(rand())