// Faça um algoritmo que calcule o fatorial de um número.
function algoritmo (factorial){
     if( factorial == 0){
       return 1
     } else {
        return  factorial * algoritmo ( factorial-1)
     }

}
console.log(algoritmo(23))