// Amarzenando uma função em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b);
}
imprimirSoma(2, 3);
// podemos usar uma função sem colocar um nome

// Amazenando uma função arrow em uma variavel , a funçao arrow é uma forma de escreve uma função em java script.Ela otimiza a escrita do seu codigo deixando-o mais limpo , enxuto é aumentando a legibilidade
const soma=(a  , b) => { 
    return a+b
}
console.log(soma(2,3));
// essa => subistituie o nome function

// retorno implicito
const sub= (a,b) => a-b
console.log( sub(2,3));
// usamos apenas uma linha reduzimos o codigo 

const imprimir2=a => console.log(a)
imprimir2('legalll!!!!!')