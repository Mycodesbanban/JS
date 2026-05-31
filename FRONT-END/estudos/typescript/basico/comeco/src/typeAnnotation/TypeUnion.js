"use strict";
// pode ter mais de um tipo 
Object.defineProperty(exports, "__esModule", { value: true });
function soma(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return `${a}${b}`;
}
console.log(soma(12, 12));
console.log(soma("12", "12"));
//# sourceMappingURL=TypeUnion.js.map