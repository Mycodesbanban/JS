export declare class Calculadora {
    number: number;
    constructor(number: number);
    add(n: number): this;
    sub(n: number): this;
    mul(n: number): this;
    div(n: number): this;
}
export declare class SubCalculadora extends Calculadora {
    p(n: number): this;
}
export declare class Request {
    private method;
    private url;
    setMedthod(method: "get" | "post"): this;
    setUrl(url: string): this;
    send(): void;
}
//# sourceMappingURL=ThisPolimorfico.d.ts.map