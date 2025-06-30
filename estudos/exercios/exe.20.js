// Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando 
// switch. Crie um case default que escreva ‘Número fora do intervalo
function programa (conatagem){
    switch ( conatagem){
        case 0 :
            return console.log("Zero")
        case 1 :
            return console.log("UM")
        case 2 :
            return console.log("DOIS")
        case 3:
            return console.log("TRÊS")
        case 4 :
            return console.log("QUATRO")
        case 5 : 
            return console.log("CINCO")
        case 6:
            return console.log("SEIS")
        case 7 :
            return console.log("SETE")
        case 8 :
            return console.log("OITO")
        case 9 :
            return console.log("NOVE")
        case 10 :
            return console.log("DEZ")
        default:
            console.log("fora da listagem")
    }
}
programa(1)
programa(2)
programa(3)
programa(4)
programa(5)
programa(6)
programa(7)
programa(8)
programa(9)
programa(10)