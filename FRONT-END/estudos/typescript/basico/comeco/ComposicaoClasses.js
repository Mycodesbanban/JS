export class Carro {
    motor = new Motor();
    turnOn() {
        this.motor.turnOn();
    }
    speedOn() {
        this.motor.speedOn();
    }
    turnOff() {
        this.motor.turnOff();
    }
}
export class Motor {
    turnOn() {
        console.log(" o carro esta ligado");
    }
    speedOn() {
        console.log("o carro esta acelerando");
    }
    turnOff() {
        console.log("o carro esta DESLIGADO");
    }
}
const carro = new Carro();
carro.turnOn();
//# sourceMappingURL=ComposicaoClasses.js.map