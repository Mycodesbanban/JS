// um funcionário irá receber um aumento de acordo com o seu plano de 
// trabalho, de acordo com a tabela abaixo:  
// Plano Aumento 
// A 10% 
// B 15% 
// C 20% 
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu 
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

function salario (plano , salarioatual){
    switch(plano){
        case "A":
            return salarioatual * 1.1
        case "B":
            return salarioatual * 1.15
        case "C":
             return salarioatual * 1.2
        default:
            console.log("Salario invalido")
    }
}
console.log(salario("A", 1000))
console.log(salario("B" , 1000))
console.log(salario("C",1000))
console.log(salario("V" ,5000))

