// A estrutura de controle for em JavaScript é uma das maneiras mais comuns de criar loops. Ela permite que você execute um bloco de código um número específico de vezes, facilitando a iteração sobre arrays, objetos ou simplesmente repetindo uma ação várias vezes.

// Sintaxe do for

// for (inicialização; condição; incremento) {
    // Código a ser executado enquanto a condição for verdadeira
// }

// componentes
// Inicialização: É executada uma vez antes do loop começar. Geralmente, é usada para declarar e inicializar uma variável de controle.
// Condição: É avaliada antes de cada iteração. Se for verdadeira (true), o bloco de código dentro do loop é executado. Se for falsa (false), o loop termina.
// Incremento: É executado após cada iteração do loop. Geralmente, é usado para atualizar a variável de controle

// Exemplo Simples
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// resultado
1
2
3
4
5
// terando sobre um Array
// O loop for é frequentemente usado para iterar sobre os elementos de um array.

// exemplo 
let frutas = ["maçã", "banana", "laranja", "uva"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
// resultado
// maçã
// banana
// laranja
// uva

// vamos fazer testes
let cont1= 1
while( cont1 <= 10){
    console.log(`Contador= ${cont1}`)
    cont1++
    }
for( let i = 1; i<=10; i++){
    console.log(`i=${i}`)
}

const nota = [6.7 , 2.6 , 8.7 , 8.0 , 7.7]
for (let i = 0; i < nota.length; i++){
    console.log(`nota=${nota[i]}`)
}
console.log(i)
// O loop for é uma ferramenta poderosa em JavaScript que permite executar um bloco de código repetidamente com base em uma condição