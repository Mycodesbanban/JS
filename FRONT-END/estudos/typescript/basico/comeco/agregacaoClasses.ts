export class CarrinhoDeCompra {
    private readonly produtos:Produto[] = []

    insirirProduto(...produtos:Produto[]):void {
        for(const produto of produtos){
            this.produtos.push(produto)
        }
    }
    quantidade(): number {
        return this.produtos.length
    }
    total():number {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0 )
    }

}

export class Produto{
    constructor (public _nome: string, public _preco:number){

    }
    get nome ():string {
        return this._nome
    }
    get preco ():number {
        return this._preco
    }
}

const Carrinhocompra = new CarrinhoDeCompra()
const produtovei= new Produto ("bosta", 4937349.3)
const produtovei2= new Produto ("bosta", 4937344444444492.3)


Carrinhocompra.insirirProduto(produtovei)
Carrinhocompra.insirirProduto(produtovei2)

console.log(Carrinhocompra.quantidade())
