
// function declarition
// A forma mais comum de declarar uma função é usando a declaração de função. Essa forma é hoisted, o que significa que você pode chamar a função antes de sua definição no código.
function soma (x , y){
    return x + y

}
// function expression
// Uma expressão de função é uma função que é atribuída a uma variável. Essa forma não é hoisted, então você deve chamar a função após sua definição.
const sub= function(x , y){
    return x - y
}

// named function expression 
// é uma forma de declarar uma função que é atribuída a uma variável, mas, ao contrário de uma função anônima, ela possui um nome
const mult= function mult( x , y){
    return x * y  //essa forma e pouco usanda 
}

// funções anonimas 
// As expressões de função podem ser anônimas, ou seja, não têm um nome. Elas são frequentemente usadas como callbacks.
const resultado = function(param1, param2) {
    return param1 * param2;
};

console.log(resultado(2, 3)); // 6

// arrow function 
// Introduzidas no ECMAScript 2015 (ES6), as funções arrow oferecem uma sintaxe mais concisa e não têm seu próprio this, o que pode ser útil em certos contextos.
const soma = (param1, param2) => param1 + param2;

// Chamada da função
console.log(soma(2, 3)); // 5
// Se a função tiver apenas um parâmetro, você pode omitir os parênteses:
const quadrado = x => x * x;

console.log(quadrado(4)); // 16

// Funções Imediatamente Invocadas (IIFE)
// Uma função imediatamente invocada é uma função que é definida e chamada imediatamente. Isso é útil para criar um escopo isolado.
(function() {
    console.log("Esta função é executada imediatamente!");
})();

// Funções Construtoras
// As funções construtoras são usadas para criar objetos. Elas são chamadas com a palavra-chave new.

// Métodos de Objetos
// Funções também podem ser definidas como métodos de um objeto. Nesse caso, a função é uma propriedade do objeto.Funções também podem ser definidas como métodos de um objeto. Nesse caso, a função é uma propriedade do objeto.