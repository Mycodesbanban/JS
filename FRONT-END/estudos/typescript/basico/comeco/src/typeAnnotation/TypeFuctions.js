"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mapString(array, callbackfn) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        // newArray.push(callbackfn(item))
    }
    return newArray;
}
const abc = ["a", "b", "c"];
const abdcMapped = mapString(abc, (item) => item.toUpperCase());
console.log(abdcMapped);
exports.default = mapString;
//# sourceMappingURL=TypeFuctions.js.map