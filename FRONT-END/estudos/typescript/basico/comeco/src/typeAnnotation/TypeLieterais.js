"use strict";
// tipos literais e usar valores como tipos 
Object.defineProperty(exports, "__esModule", { value: true });
let x = 10;
x = "boga";
let a = 100;
a = 1; // nao pode mudar o valor por que a nao pode ser atribuido a outro valor 
let c = 100; // aqui diz que quer que a seja 100 como uma constante
const pessoa = {
    nome: "maycon", // nao dar pra mudar o objeto com o as const
    sobrenome: "miranda"
};
function escolherCor(cor) {
    return cor;
}
console.log(escolherCor("marrom cor de bosta"));
console.log(escolherCor("amarelo cor de mijo"));
//# sourceMappingURL=TypeLieterais.js.map