export class Escritor {
    _nome;
    _ferramenta = null;
    constructor(_nome) {
        this._nome = _nome;
    }
    set ferramenta(ferramenta) {
        this._ferramenta = ferramenta;
    }
    get nome() {
        return this._nome;
    }
    escrever() {
        if (this._ferramenta === null) {
            console.log("nao posso escrever sem minha ferramenta de trabalho");
            return;
        }
        this._ferramenta.escrever();
    }
}
export class Ferramenta {
    _nome;
    constructor(_nome) {
        this._nome = _nome;
    }
    get nome() {
        return this._nome;
    }
}
export class Caneta extends Ferramenta {
    escrever() {
        console.log(`minha caneta escreve tao bem quanto as ondas do seu corpo nu:${this.nome} queima a roscaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`);
    }
}
export class Maquina extends Ferramenta {
    escrever() {
        console.log("queria apenas ter um boga limpo mas pra salvar minha familia deixo ele sujo");
    }
}
const escritor = new Escritor("Bogudo");
const caneta = new Caneta("bogh");
const maquinaEscrever = new Maquina("bsbsbsbsbsbsbsbsbsbsbhsbsbbsbsbsbsbsbsbsbsbsbsbsbsbsbs");
console.log(escritor.nome);
console.log(maquinaEscrever.nome);
console.log(caneta.nome);
escritor.escrever();
//# sourceMappingURL=associacaoClasses.js.map