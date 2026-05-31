export declare class Empresa {
    readonly nome: string;
    private readonly colaboradores;
    protected readonly cnpj: string;
    constructor(nome: string, cnpj: string);
    adicionarColaborador(colaborador: Colaborador): void;
}
export declare class Colaborador {
    readonly nome: string;
    readonly sobrenome: string;
    constructor(nome: string, sobrenome: string);
}
//# sourceMappingURL=Classes.d.ts.map