class Gay {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    nomeCompleto() {
        return this.nome + " sua idade e " + this.idade;
    }
}
const big = new Gay("Big", 23);
console.log(big.nomeCompleto());
export {};
//# sourceMappingURL=TypeAliasClasses.js.map