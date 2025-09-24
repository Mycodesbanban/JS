// funções anonimas
// Funções anônimas (ou funções sem nome) são funções que não têm um nome definido. Elas são frequentemente usadas em JavaScript para criar funções que podem ser passadas como argumentos, atribuídas a variáveis ou usadas como callbacks. As funções anônimas são uma parte importante da programação funcional e são amplamente utilizadas em várias situações, como em eventos, temporizadores e manipulação de arrays.

// Sintaxe
// const funcaoAnonima = function() {
    // corpo da função
// };
// exemplo de uso
const saudacao = function() {
    console.log("Olá, mundo!");
};

saudacao(); // "Olá, mundo!"
// podemos abrir uma função anonima em uma variavel

// Como Callback
// Funções anônimas são frequentemente usadas como callbacks em métodos de array, como forEach, map, filter, etc.
const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero) {
    console.log(numero * 2); // Imprime o dobro de cada número
});

// teste
const soma = function ( x , y ) {
    return x + y

}
const imprimierresultado=function( a , b , operacao=soma){
    console.log(operacao(a , b))
}
imprimierresultado(3, 4)
imprimierresultado(3 , 4 , soma)
imprimierresultado(3 , 4 , function ( x , y ){
    return x - y

})
// vamos fazer com um arrow function
imprimierresultado ( 3 , 4 , ( x , y) => x*y)

// função anonima  dentro de um objeto
const pessoa = {
    falar: function() {
        console.log("Opa")
    }
}
pessoa.falar()
// podemos tira a palavra function
const pessoa2 = {
    falar2(){
        console.log("Opa")
    }
}
pessoa2.falar2()
