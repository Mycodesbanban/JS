export class CarrinhoDeCompra {
    produtos = [];
    insirirProduto(...produtos) {
        for (const produto of produtos) {
            this.produtos.push(produto);
        }
    }
    quantidade() {
        return this.produtos.length;
    }
    total() {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
    }
}
export class Produto {
    _nome;
    _preco;
    constructor(_nome, _preco) {
        this._nome = _nome;
        this._preco = _preco;
    }
    get nome() {
        return this._nome;
    }
    get preco() {
        return this._preco;
    }
}
const Carrinhocompra = new CarrinhoDeCompra();
const produtovei = new Produto("bosta", 4937349.3);
const produtovei2 = new Produto("bosta", 4937344444444492.3);
Carrinhocompra.insirirProduto(produtovei);
Carrinhocompra.insirirProduto(produtovei2);
console.log(Carrinhocompra.quantidade());
//# sourceMappingURL=agregacaoClasses.js.map