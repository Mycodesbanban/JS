// call e apply
// Em JS são métodos que permitem que você chame uma função com um determinado valor de this e argumentos. Ambas são métodos do objeto Function e são usadas para invocar funções de maneira mais flexível. A principal diferença entre elas está na forma como os argumentos são passados.

// call:chama uma função com um valor específico de this e aceita uma lista de argumentos separados por vírgula.

// sintaxe :
// func.call(thisArg, arg1, arg2, ...);
// thisArg: O valor que deve ser usado como this ao chamar a função.
// arg1, arg2, ...: Os argumentos que serão passados para a função.

// Exemplo
function apresentar() {
    console.log(`Meu nome é ${this.nome}`);
}

const pessoa = {
    nome: 'João'
};

apresentar.call(pessoa); // "Meu nome é João"

// apply:  é semelhante ao call, mas aceita um array (ou um objeto semelhante a um array) como segundo argumento, que contém os argumentos a serem passados para a função

// sintaxe 
// func.apply(thisArg, [argsArray]);

// thisArg: O valor que deve ser usado como this ao chamar a função.
// argsArray: Um array ou um objeto semelhante a um array que contém os argumentos a serem passados para a função.
// exemplo:
function apresentar(sobrenome) {
    console.log(`Meu nome é ${this.nome} ${sobrenome}`);
}
const pessoa2 = {
    nome: 'Maria'
};
apresentar.apply(pessoa2, ['Silva']); // "Meu nome é Maria Silva"
// Diferenças entre call e apply
// Forma de Passar Argumentos:
// call: Passa os argumentos individualmente.
// apply: Passa os argumentos como um array.
// Quando Usar call ou apply
// Use call quando você conhece o número de argumentos que a função espera e pode passá-los diretamente.
// Use apply quando você tem um array de argumentos que deseja passar para a função.
// teste:
function getpreco (imposto=0 , moeda="R$") {
    return `${moeda} ${this.preco * (1-this.desc) * (1 + imposto)} `
}
const produto= {
    nome:"Notebook",
    preco:9097,
    desc:0.15,
    getpreco
}
global.preco=20
global.desc=0.8
console.log(getpreco())
console.log(produto.getpreco())
// usando o call 
const carro = { preco:49990 , desc:0.20}
console.log(getpreco.call(carro))
// usando o apply
console.log(getpreco.apply(carro))
// qual é a diferença de usar call e apply, é somente a passagem dos parametros 
// com o call 
console.log(getpreco.call(carro , 0.17 , "$"))
// com o apply
console.log(getpreco.apply(carro , [ 0.17, "$"]))
