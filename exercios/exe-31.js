// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor 
// e imprime a quantidade no console. 
function perrocore(ventor){
    let negativos=0


    for ( let i = 0 ; i < ventor.length ; i++){
        if( ventor [i] < 0)
            negativos++
    }
    console.log(`existem entorno de numeros ${negativos} negativos e eles são ${ventornumero}`)
}
let ventornumero=[-1 , -2 , -3, -4, -5]
perrocore(ventornumero)