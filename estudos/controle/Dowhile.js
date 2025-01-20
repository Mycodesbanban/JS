// A estrutura de controle do...while em JavaScript é semelhante ao loop while, mas com uma diferença importante: o bloco de código dentro do do é executado pelo menos uma vez, independentemente da condição. Isso ocorre porque a condição é avaliada após a execução do bloco de código.


// Sintaxe do do...while

// do {
//     // Código a ser executado
// } while (condição);

// funcionamento

// Execução do Código: O bloco de código dentro do do é executado uma vez.

// Avaliação da Condição: Após a execução do bloco, a condição é avaliada.

// Repetição: Se a condição for verdadeira (true), o bloco de código é executado novamente.

// Saída do Loop: O loop continua até que a condição se torne falsa (false).

// Exemplo
let contador = 1;

do {
    console.log(contador);
    contador++; // Incrementa o contador
} while (contador <= 5);

// resultado
1
2
3
4
5

// Comparação com while
// A principal diferença entre do...while e while é que, no do...while, o bloco de código é garantido para ser executado pelo menos uma vez, mesmo que a condição seja falsa desde o início.

let contador3 = 6;

// Usando while
while (contador3 <= 5) {
    console.log(contador3); // Este bloco não será executado
    contador3++;
}

// Usando do...while
do {
    console.log(contador); // Este bloco será executado uma vez
    contador++;
} while (contador <= 5);

// resultado

6

// No exemplo acima, o loop while não executa o bloco de código porque a condição é falsa desde o início, enquanto o loop do...while executa o bloco uma vez antes de verificar a condição.

function inteiroaleatorio(min, max){
    const valor=Math.random() * ( max - min) + min
    return Math.floor(valor)
let opcao=0
 }
 do{
    opcao= inteiroaleatorio ( -1, 10)
    console.log(`Opção escolhida foi ${opcao}`)
} while (opcao != -1)
console.log('Até a proxima!')

// conclusão

// O loop do...while é uma estrutura útil em JavaScript quando você precisa garantir que um bloco de código seja executado pelo menos uma vez, independentemente da condição 