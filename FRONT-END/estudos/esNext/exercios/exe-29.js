 // Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. 
// Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números 
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos 
// deles estão fora do intervalo, escrevendo estas informações.

function conta (vetor){
    let par=0
    let impar=0
    let fora= 0;
    let dentro=0;
    for ( let i = 0 ; i <vetor.length; i++ ){
        let numero= vetor[i]
        if ( numero > 10 && numero < 20){
            dentro++
        }else{
            fora++
    } 

    if (numero % 2== 0){
        par++
        console.log()
    }else{
        impar++
    }
}
console.log(`Número dentro do intervalo ${dentro} é temos Número fora do intervalo ${fora} e temos numeros ${par} pares e ${impar} e impares `)

}
 let vetornumero=[ 2 , 3, 4, 5, 6, 7,  10 , 11, 12, 13, 14, 15, 16, 17 , 18, 19 ,20]
 conta(vetornumero)