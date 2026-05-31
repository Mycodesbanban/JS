export declare class CarrinhoDeCompra {
    private readonly produtos;
    insirirProduto(...produtos: Produto[]): void;
    quantidade(): number;
    total(): number;
}
export declare class Produto {
    _nome: string;
    _preco: number;
    constructor(_nome: string, _preco: number);
    get nome(): string;
    get preco(): number;
}
//# sourceMappingURL=agregacaoClasses.d.ts.map