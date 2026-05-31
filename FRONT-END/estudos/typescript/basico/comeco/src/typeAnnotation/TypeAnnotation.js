"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nome = "luiz"; // string
// como falar para o typestring que algo e de determinado tipo:
const number = 12; // e assim que passamos algum determinado tipo no typescript mas e muito raro usar 
// podem facilitar muito quando podemos colocar tipos especificos como symbol e bigint
// array
let arrayNumber = [1, 2, 3, 4, 5]; // passamos assim array os <> e para dizer qual e o tipo do array
// ou podemos fazer assim
let arrayNumber2 = [1, 2, 3, 4, 4, 45];
// objetos 
let objetos = {
    nome: "maycon",
    idade: 12,
    adulto: false
}; // e assim que voce determina o tipo no objeto, o "?"antes dos : significa que pode ser opcional
console.log(objetos);
// funcoes 
function soma(x, y) {
    return x + y;
}
const result = soma(2, 8);
console.log(result);
// ou podemos fazer assim 
const soma2 = (x, y) => x + y;
console.log(soma2(1, 9));
// Para criar seus proprios tipos criamos com letra maiuscula
//# sourceMappingURL=TypeAnnotation.js.map