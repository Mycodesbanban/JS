// A estrutura de controle while em JavaScript é usada para executar um bloco de código repetidamente enquanto uma condição especificada for verdadeira. É uma das formas de criar loops em JavaScript, permitindo que você execute um conjunto de instruções várias vezes sem precisar duplicar o código.

// Sintaxe do while
// while (condição) {
    // Código a ser executado enquanto a condição for verdadeira
// }

// Funcionamento

// Avaliação da Condição: Antes de cada iteração, a condição é avaliada.

// Execução do Código: Se a condição for verdadeira (true), o bloco de código dentro do while é executado.

// Repetição: Após a execução do bloco, a condição é avaliada novamente. Se ainda for verdadeira, o bloco é executado novamente.

// Saída do Loop: O loop continua até que a condição se torne falsa (false).

// Exemplo Simples

// let contador = 1;

// while (contador <= 5) {
//     console.log(contador);
//     contador++; // Incrementa o contador
// }
// resultado
1
2
3
4
5


// Considerações Importantes

// Condição de Saída: É crucial que a condição eventualmente se torne falsa; caso contrário, você criará um loop infinito, que pode travar o navegador ou o ambiente de execução.
 let i = 0;
     while (i < 5) {
     console.log(i);
    i++; // Se você comentar esta linha, o loop se tornará infinito
 }
// Incremento/Decremento: Certifique-se de que a variável que controla a condição (neste caso, contador ou i) seja alterada dentro do loop para evitar loops infinitos.

// 
function inteiroaleatorio(min, max){
    const valor=Math.random() * ( max - min) + min
    return Math.floor(valor)

}
let opcao=0
while (opcao != -1) {
    opcao= inteiroaleatorio ( -1, 100)
    console.log(`Opção escolhida foi ${opcao}`)
}
 console.log('Até a proxima')

// Conclusão
// O loop while é uma ferramenta poderosa em JavaScript para executar um bloco de código repetidamente enquanto uma condição for verdadeira. É importante garantir que a condição eventualmente se torne falsa para evitar loops infinito