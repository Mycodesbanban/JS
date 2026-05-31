export declare class Pessoa {
    private nome;
    private sobrenome;
    constructor(nome: string, sobrenome: string);
}
export declare class RemoteControl {
    private powershell;
    constructor(powershell?: boolean);
    turnOn(): void;
    turnOFF(): void;
    getStatus(): boolean;
}
export declare abstract class Animal {
    name: string;
    constructor(name: string);
    abstract makeNoise(): void;
}
export declare class Dog extends Animal {
    makeNoise(): void;
}
//# sourceMappingURL=pilaresPOO.d.ts.map