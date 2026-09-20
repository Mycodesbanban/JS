export class Calculadora {
    number;
    constructor(number) {
        this.number = number;
    }
    add(n) {
        this.number += n;
        return this;
    }
    sub(n) {
        this.number -= n;
        return this;
    }
    mul(n) {
        this.number *= n;
        return this;
    }
    div(n) {
        this.number /= n;
        return this;
    }
} // podemos extender e a outra classe usa o mesmo this
export class SubCalculadora extends Calculadora {
    p(n) {
        this.number **= n;
        return this;
    }
}
const calculadora = new SubCalculadora(0);
calculadora.add(5).mul(2).sub(5).p(6);
console.log(calculadora);
// builder
export class Request {
    method = null;
    url = null;
    setMedthod(method) {
        this.method = method;
        return this; // retorna o method 
    }
    setUrl(url) {
        this.url = url;
        return this; // retorna o method 
    }
    send() {
        console.log(`enviando dados via ${this.method} para ${this.url} `);
    }
}
const request = new Request();
request.setUrl("chipata.com").setMedthod("get");
request.send();
//# sourceMappingURL=ThisPolimorfico.js.map