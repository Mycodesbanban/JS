// vamos criar uma função que vai a usar a mesma estrutura um vai usar o objeto e o outro vaos substituir pelo um array
function rand({min= 0 , max=1000}) {
     const valor = Math.random() * (max - min) + min 
    //  retorna um número pseudo-aleatório no intervalo [0, 1[ , ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo), que depois você pode dimensionar para um intervalo desejado
    return Math.floor(valor)
    // t arredonda um número para o inteiro mais próximo, sempre levando em consideração o valor menor. Por exemplo, Math.floor(4.7) retorna 4. 
}
const obj= { max:50 , min: 40}
console.log(rand(obj))
// vimos que vai ficar gerando valores entre 40 é 50 como definimos 
// podemos fazer com o valor padrão que definimos 
console.log(rand({min:988}))
// vimos que no valor padrão o max e 1000 colocamos 988 então só vai gera numeros de 988 para 1000
// quando colocaos uma objeto vazio ele vai pegar o padrão que fizemos 
console.log(rand({}))