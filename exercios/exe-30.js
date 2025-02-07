// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function calcular (media){
    let soma = 0 ;
    let numero= media.length; //Contamos quantos números temos no vetor
    for (let i = 0 ; i < numero ; i++){
        soma += media[i]
    }
    let mediados= soma / numero
    console.log(`calculando o valor da media ${mediados}`)
}

let ventornumero = [ 2 , 3, 4, 5]
calcular(ventornumero)