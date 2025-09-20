// Funções arrow em Js
// função arrow sempre é uma função anonima , são uma forma concisa de escrever funções, elas ntroduzidas no ECMAScript 2015 (ES6). Elas oferecem uma sintaxe mais curta e têm algumas características únicas em relação às funções tradicionais.

// sintaxe

// const nomeDaFuncao = (param1, param2, ...) => {
    // corpo da função
// };

// se a função tiver apenas um parâmetro , você pode omitir os parênteses

// const nomeDaFuncao = param => {
    // corpo da função
// };
// Se a função tiver apenas uma expressão, você pode omitir as chaves e o return:
// const nomeDaFuncao = (param1, param2) => param1 + param2;

// Exemplos de Funções Arrow
// função simples 
const soma = (a, b) => a + b;
console.log(soma(2, 3)); // 5

// Sem Parâmetros
// Se não houver parâmetros, você deve usar parênteses vazios:
const saudacao = () => 'Olá, mundo!';
console.log(saudacao()); // "Olá, mundo!"

//  Com um Único Parâmetro
// Se houver apenas um parâmetro, você pode omitir os parênteses:
const quadrado = x => x * x;
console.log(quadrado(4)); // 16

// Função com Múltiplas Linhas
// Se a função tiver várias instruções, você deve usar chaves e o return
const calcularArea = (largura, altura) => {
    const area = largura * altura;
    return area;
};

console.log(calcularArea(5, 10)); // 50

// vamos fazer testes


let dobro = function(a){
    return 2 * a 

}
dobro=(a)=>{
    return 2 *a
}
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function (){
    return "Olá"
}
ola = ()=> "Olá";
ola = _ => "Olá"//possui um paramentro
console.log(ola())