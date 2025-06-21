let num1= 14.1388127387
let num2 = 2.5
console.log(num1.toString()+num2);//vai ser convertido para string
console.log(num1.toFixed(3)) // deixa o numero fixo em 2 casas decimais e vai arrendodar 

console.log(Number.isInteger(num1)) // verificar se o numero é inteiro


let num3 = Math.floor(num1+num2) //arredonda o numero para baixo
console.log(num3)

let num4 = Math.ceil(num3 + 5) // arredonda para baixo
console.log(num4)

let num5 = Math.round(num4) // retorna um numero arredondado para o mais proximo
console.log(num5)

console.log(Math.max(1 ,2 , 3, 4 , 5, 6, 7, 8, 9,10 , -10)) // vai pegar o maior numero dessa sequência 

console.log(Math.min(12 , 402 , -12)) // vai mostrar o menor numero da sequência


const aleatorio = Math.round(Math.random() * (10 - 5) + 5)// gerar um número aleatorio entre 5 e 10 

console.log(aleatorio)