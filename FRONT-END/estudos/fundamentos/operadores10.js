// Operadores Ternarios 
// é uma forma concisa de expressar uma condição que resulta em um valor. Ele é frequentemente usado como uma alternativa ao uso de instruções if...else para atribuições simples ou para retornar valores com base em uma condição.

// Sintaxe do Operador Ternário
// A sintaxe do operador ternário é a seguinte:


// condição ? valorSeVerdadeiro : valorSeFalso;
// condição: A expressão que será avaliada. Se for verdadeira, o operador retorna valorSeVerdadeiro; caso contrário, retorna valorSeFalso.

const resultado= nota =>nota>=7 ?'Aprovado': 'Reprovado'
console.log(resultado(7.1))
// esse exemplo acima e sem usar o if e o else podemos fazer assim tambem
const resultado3= nota=> {
    return nota >=7? 'Aprovado' : 'Reprovado'
}
console.log(resultado3(7.2))

// podemos fazer de outra maneira tambem
let idade = 18;
let podeDirigir = idade >= 18 ? "Pode dirigir" : "Não pode dirigir";

console.log(podeDirigir); // "Pode dirigir"
