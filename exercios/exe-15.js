// Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao 
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. 
function semana (dia){
    switch (dia){
        case 1 :
            return console.log("Final de semana Domingo")
        case 2 :
            return console.log("Segunda")
        case 3 : 
            return console.log("Terça")
        case 4 : 
            return console.log("Quarta")
        case 5 :
            return  console.log("Quinta")
        case 6 :
            return console.log("Sexta")
        case 7 :
            return console.log("Dias util")
        case 8 :
            return console.log("Folga")
        default:
            return console.log("Dia invalido")
    }
    
}
semana(9)
semana(8)
semana(7)
