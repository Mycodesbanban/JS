"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPerson = createPerson;
exports.squardeOf = squardeOf;
let x;
if (typeof x === "undefined")
    x = 20;
console.log(x * 20);
function createPerson(fristName, lastName) {
    return {
        fristName,
        lastName
    }; // corpo da funcao
}
console.log(createPerson("nat"));
function squardeOf(x) {
    if (typeof x === "number")
        return x * x;
    return null; // caso nao seja um valor de number vai retornar null
}
const squardeOfTwo = squardeOf(2);
const squardeOfTwoString = squardeOf("2");
console.log(squardeOfTwo);
console.log(squardeOfTwoString);
//# sourceMappingURL=TypeUndefind&Null.js.map