// A estrutura de controle switch em JavaScript é uma alternativa ao uso de múltiplas instruções if...else if...else. Ela permite que você teste uma expressão contra uma lista de valores possíveis, facilitando a leitura e a manutenção do código quando você precisa comparar uma variável com várias opções é ele foi feito para multiplas seleções.

// Sintaxe do Switch
// switch (expressão) {
    // case valor1:
        // Código a ser executado se a expressão for igual a valor1
        // break;
    // case valor2:
        // Código a ser executado se a expressão for igual a valor2
        // break;
    // Você pode adicionar quantos casos quiser
    // default:
        // Código a ser executado se nenhum dos casos anteriores for verdadeiro
// }

// Componentes do switch

// expressão: A expressão que será avaliada e comparada com os valores dos casos.
// case: Cada case representa um valor que a expressão pode ter. Se a expressão corresponder a um valor de case, o código associado a esse case será executado.
// break: A instrução break é usada para sair do bloco switch. Se break não for usado, a execução continuará para o próximo case, mesmo que ele não corresponda.
// default: O bloco default é opcional e será executado se nenhum dos casos corresponder à expressão.



// exemplo de fall-through


let fruta = "banana";

switch (fruta) {
    case "maçã":
        console.log("Você escolheu uma maçã.");
        break;
    case "banana":
    case "laranja": // Fall-through
        console.log("Você escolheu uma banana ou uma laranja.");
        break;
    default:
        console.log("Fruta desconhecida.");
}

// vamos fazer testes

const imprimir = function(nota){
    switch ( Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra');
            break
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6 :
        case 5 :
        case 4 :
            console.log('Recuperação')
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Essa nota está invalida')


    }

}
imprimir(10)
imprimir(8.9)
imprimir(6.9)
imprimir(0)
imprimir('Bu')

// conclusão
// A estrutura switch é uma maneira eficaz de lidar com múltiplas condições em JavaScript, especialmente quando você precisa comparar uma única expressão com vários valores