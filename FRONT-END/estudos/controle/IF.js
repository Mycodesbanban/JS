// if
// A estrutura de controle if em JavaScript é uma das principais ferramentas para implementar lógica condicional em seu código. Ela permite que você execute um bloco de código com base na avaliação de uma condição. Se a condição for verdadeira (true), o código dentro do bloco if será executado; caso contrário, ele será ignorado.

// Estrutura Básica do if
//if (condição) {
    // Código a ser executado se a condição for verdadeira
//}

// Exemplo Simples
let idade = 20;

if (idade >= 18) {
    console.log("Você é maior de idade.");
}

// Neste exemplo, a mensagem "Você é maior de idade." será exibida no console porque a condição idade >= 18 é verdadeira.

// vamos fazer um exemplo com uma função

function boanoticia(nota) {
    if ( nota >= 7){
        console.log('Meus parabens' + nota)
    }
}
boanoticia(6.6)
boanoticia(7.1)

// vimos que só mostrou a nota maior que 7 já a outra ele ignorou

// vamos criar outro exemplo

function seforverdade(valor){
    if ( valor) {
        console.log('È verdade.......' + valor)
    }
}
seforverdade(' ')
seforverdade(-1)
seforverdade([86, 86556])
seforverdade({})
seforverdade([])