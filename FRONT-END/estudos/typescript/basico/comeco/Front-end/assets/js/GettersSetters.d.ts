export declare class Pessoa {
    nome: string;
    sobrenome: string;
    constructor(nome: string, sobrenome: string);
    getName(): string;
    static falaOi(): void;
    static criarPessoa(nome: string, sobrenome: string): Pessoa;
    static idadePadrao: number;
    static cpfPadrao: string;
}
export declare class Merda extends Pessoa {
    getName(): string;
}
//# sourceMappingURL=GettersSetters.d.ts.map