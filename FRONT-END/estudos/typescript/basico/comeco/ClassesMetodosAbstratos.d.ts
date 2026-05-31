export declare abstract class Personagem {
    protected nome: string;
    protected ataque: number;
    protected life: number;
    constructor(nome: string, ataque: number, life: number);
    atacar(personagem: Personagem): void;
    perderVida(forcaDeAtaque: number): void;
    abstract bordao(): void;
}
export declare class GuerreiraMacumbeira extends Personagem {
    bordao(): void;
}
export declare class GuerreiraEvangelica extends Personagem {
    bordao(): void;
}
export declare class GuerreiroCatolico extends Personagem {
    bordao(): void;
}
//# sourceMappingURL=ClassesMetodosAbstratos.d.ts.map