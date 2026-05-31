export declare class Escritor {
    private _nome;
    private _ferramenta;
    constructor(_nome: string);
    set ferramenta(ferramenta: Ferramenta);
    get nome(): string;
    escrever(): void;
}
export declare abstract class Ferramenta {
    private _nome;
    constructor(_nome: string);
    abstract escrever(): void;
    get nome(): string;
}
export declare class Caneta extends Ferramenta {
    escrever(): void;
}
export declare class Maquina extends Ferramenta {
    escrever(): void;
}
//# sourceMappingURL=associacaoClasses.d.ts.map