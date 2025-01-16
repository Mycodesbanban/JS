// operadores lógicos Os operadores lógicos em JavaScript são usados para combinar expressões booleanas e retornar um valor booleano (true ou false). Eles são fundamentais para a construção de condições complexas em estruturas de controle, como if, while, e for

// 1.and(&&)
// O operador logico AND ('&&') retorna 'true' se amabas as expressões forem verdadeira . Se uma das espressões for falsa , o resultado será 'false'.
let a = true;
let b = false;
console.log(a && b);//false
console.log(a && true);//true
console.log(false && true); //false

//2 OR (||)
// O operador lógico Or ('||') retorna 'true' se pelo menos uma das expressões for verdadeira. O resultado sera 'false' somente se ambas as expressões forem falsas
let a2 = true;
let b2 = false;
console.log(a || b );//true
console.log(false || false);// false 
console.log(true || true); // true

//3 NOT(!);
// O operadore lógico NOT ('!') iverte o valor booleano da expressão. Se a expressão for 'true' , o resultado será 'false' , e vice-versa.
let a3 = true;

console.log(!a);//false
console.log(!false);//true

// tabela da verdade
// a tabela da verdade que resume o comportamento dos operadores lógicos:
// | A | B | A && B | A || B | !A | |-------|-------|--------|--------|-------| | true | true | true | true | false | | true | false | false | true | false | | false | true | false | true | true | | false | false | false | false | true |


// conclusão
// Os operadores lógicos são essenciais para a construção de condições complexas em JavaScript. Eles permitem que você combine várias expressões booleanas e tome decisões com base em múltiplas condições. Compreender como esses operadores funcionam é fundamental para escrever código eficaz e lógico.


// Para entender como o operador XOR funciona, é útil ver como os números são representados em binário. Vamos considerar dois números e aplicar o operador XOR a eles.

// Exemplo
// Vamos considerar os números 5 e 3:
// O número 5 em binário é 0101.
// O número 3 em binário é 0011.
// Tabela de Verdade do XOR
// Aqui está a tabela de verdade para o operador XOR:

// A	B	A ^ B
// 0	0	0
// 0	1	1
// 1	0	1
// 1	1	0

let a7 = 5; // 0101 em binário
let b7 = 3; // 0011 em binário

let resultado = a7 ^ b7; // 0110 em binário, que é 6 em decimal
console.log(resultado); // 6

// Outro exemplo
let x = 12; // 1100 em binário
let y = 5;  // 0101 em binário

let resultado2 = x ^ y; // 1001 em binário, que é 9 em decimal
console.log(resultado2); // 9
// Aplicações do XOR
// O operador XOR tem várias aplicações práticas, incluindo:

// Troca de Valores: O XOR pode ser usado para trocar valores de duas variáveis sem usar uma variável temporária.
let x2 = 10;
let y2 = 20;

x2 = x2 ^ y2; // x agora é 30
y2 = x2 ^ y2; // y agora é 10
x2 = x2 ^ y2; // x agora é 20

console.log(x2); // 20
console.log(y2); // 10
// Verificação de Paridade: O XOR pode ser usado para verificar a paridade de um conjunto de bits. Se o resultado do XOR de um conjunto de bits for 0, isso significa que há um número par de bits 1.

// Criptografia: O XOR é frequentemente usado em algoritmos de criptografia, pois é uma operação reversível. Se você aplicar o XOR a um valor com uma chave, poderá reverter a operação aplicando o XOR novamente com a mesma chave.

// conclusão 
// O operador bitwise XOR (^) é uma ferramenta poderosa em JavaScript para manipulação de bits. Ele é útil em várias situações, desde operações matemáticas simples até aplicações mais complexas em criptografia e manipulação de dados. Compreender como o XOR funciona pode ajudar a resolver problemas de forma mais eficiente e criativa.



// exemplo em baixo 
function compras(trabalho1 , trabalho2){
    const comprasoverte= trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho1
    // const comprartv32=!!(trabalho1 ^ trabalho2) podemos fazer com bitwise xor mas vamos ultilizar o != not 
    const comprartv32= trabalho1 != trabalho2
    const matersaudavel= !comprasoverte
    return {
        comprarTv50 , comprartv32 , comprasoverte , matersaudavel
    }

}
console.log(compras(true , true));
console.log(compras(true, false));
console.log(compras(false , true));
console.log(compras( false , false));