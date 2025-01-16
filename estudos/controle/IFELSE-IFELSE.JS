// Estrutura if...else..if...else
// A estrutura if...else if...else em JavaScript é uma maneira de testar múltiplas condições de forma sequencial. Essa estrutura permite que você execute diferentes blocos de código com base na avaliação de várias condições. Se a primeira condição for verdadeira, o bloco correspondente será executado; se não, o JavaScript continuará a verificar as próximas condições até encontrar uma que seja verdadeira ou até chegar ao bloco else, se existir.

// Sintaxe
// A sintaxe básica da estrutura if...else if...else é a seguinte:

// if (condição1) {
//     // Código a ser executado se condição1 for verdadeira
// } else if (condição2) {
//     // Código a ser executado se condição2 for verdadeira
// } else if (condição3) {
//     // Código a ser executado se condição3 for verdadeira
// } else {
//     // Código a ser executado se nenhuma das condições anteriores for verdadeira
// }

// Exemplo Prático
// Vamos considerar um exemplo prático que utiliza a estrutura if...else if...else para classificar a nota de um aluno:

let nota = 85;

if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 75) {
    console.log("Bom");
} else if (nota >= 60) {
    console.log("Satisfatório");
} else {
    console.log("Reprovado");
}

// Explicação do Exemplo
// Condição 1: Se a nota for maior ou igual a 90, a mensagem "Excelente" será exibida.
// Condição 2: Se a nota for maior ou igual a 75 (mas menor que 90), a mensagem "Bom" será exibida.
// Condição 3: Se a nota for maior ou igual a 60 (mas menor que 75), a mensagem "Satisfatório" será exibida.
// Bloco else: Se nenhuma das condições anteriores for verdadeira (ou seja, a nota é menor que 60), a mensagem "Reprovado" será exibida.



// Exemplo com Várias Condições
// Aqui está outro exemplo que demonstra o uso de if...else if...else para determinar a faixa etária de uma pessoa:
let idade = 25;

if (idade < 13) {
    console.log("Criança");
} else if (idade < 20) {
    console.log("Adolescente");
} else if (idade < 65) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}

// Condição 1: Se a idade for menor que 13, a mensagem "Criança" será exibida.
// Condição 2: Se a idade for menor que 20 (mas maior ou igual a 13), a mensagem "Adolescente" será exibida.
// Condição 3: Se a idade for menor que 65 (mas maior ou igual a 20), a mensagem "Adulto" será exibida.
// Bloco else: Se a idade for 65 ou mais, a mensagem "Idoso" será exibida.

// Considerações

// Ordem das Condições: A ordem das condições é importante. O JavaScript avalia as condições na ordem em que aparecem. Assim, se uma condição anterior for verdadeira, as condições subsequentes não serão avaliadas.
// Uso de Operadores Lógicos: Você pode combinar condições usando operadores lógicos (&& para "E", || para "OU") dentro das expressões.

let idade2 = 30;
let temCarteira = true;

if (idade2 >= 18 && temCarteira) {
    console.log("Você pode dirigir.");
} else if (idade2 >= 18 && !temCarteira) {
    console.log("Você é maior de idade, mas não tem carteira.");
} else {
    console.log("Você não pode dirigir.");
}

// vamos fazer testes

// A estrutura if...else if...else é uma ferramenta poderosa em JavaScript que permite que você implemente lógica condicional complexa. Com ela, você pode testar múltiplas condições e executar diferentes blocos de código com base nos resultados dessas avaliações. 

// vamos criar uma função

Number.prototype.entre= function ( inicio , fim) {
    return this >= inicio && this <=fim
}
const imprimir= function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if (nota.entre(7,8.99)){
        console.log('aprovado')
    } else if (nota.entre(4 , 6.99)){
        console.log('Recuperação')

    } else if (nota.entre(0 , 3.99)){
        console.log('Reprovado')
    } else{
        console.log('NOTA INVALIDA?ANALISE')
    }
        

}
imprimir(10)
imprimir(8.9)
imprimir(4)
imprimir(0)
imprimir('Cuebom')