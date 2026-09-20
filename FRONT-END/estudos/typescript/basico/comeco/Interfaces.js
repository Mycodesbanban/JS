class Gay {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    namefull() {
        return this.nome + " sua idade e " + this.idade;
    }
}
const big = new Gay("Big", 23);
console.log(big.namefull());
export {};
//# sourceMappingURL=Interfaces.js.map