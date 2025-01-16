// A estrutura de controle if e else em JavaScript é fundamental para implementar lógica condicional em seu código. Ela permite que você execute diferentes blocos de código com base na avaliação de uma condição. Vamos explorar como usar if e else, incluindo exemplos práticos.


// A estrutura if e else permite que você execute um bloco de código alternativo quando a condição do if é falsa.

// if (condição) {
//     // Código a ser executado se a condição for verdadeira
// } else {
//     // Código a ser executado se a condição for falsa
// }


// Exemplo com if e else

let idade = 16;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}
// Neste exemplo, a mensagem "Você é menor de idade." será exibida no console porque a condição idade >= 18 é falsa.

// vamos criar um exemplo
 
const imprimir= function(nota){
    if (nota >= 7){
        console.log('Você passou')
    }
    else{
        console.log('Você perdeu')
    }
}
imprimir(5)
imprimir(10)
