//  Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de 
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o 
// conceito B e de 9,0 a 10,0 o conceito A.
function recebe ( vetordenotas){
    let conceitos=[]
    for (let i = 0 ; i < vetordenotas.length;i++){
        let nota= vetordenotas[i]
        if (nota > 0 && nota < 5){
            conceitos.push("D")   
        } else if ( nota > 7 && nota <9){
            conceitos.push("B")
        }else if ( nota > 9 && nota <=10) {
            conceitos.push("A")
        }else{
            conceitos.push("nota inavlida")
        }
    }
    for (let i =0 ; i < vetordenotas.length; i++){
        console.log(`nota:${vetordenotas[i]} - conceito :${conceitos[i]}`)
    }
}
let vetordenotas = [ 4.5 , 7.6 , 8.9 , 8.0 , 9.0 -1 , 11 , 10]
recebe(vetordenotas)