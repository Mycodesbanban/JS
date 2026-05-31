"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscolhaUmaCor = EscolhaUmaCor;
// O tipo enum e algo exclusivo do typescript
var Cores;
(function (Cores) {
    Cores[Cores["VERMELHO"] = 0] = "VERMELHO";
    Cores[Cores["AZUL"] = 1] = "AZUL";
    Cores[Cores["AMARELO"] = 2] = "AMARELO"; //2
})(Cores || (Cores = {}));
console.log(Cores);
function EscolhaUmaCor(cor) {
    console.log(Cores[cor]);
}
EscolhaUmaCor(Cores.AMARELO);
//# sourceMappingURL=TypeEnum.js.map