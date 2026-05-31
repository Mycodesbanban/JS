export class Carro {
     private readonly motor=  new Motor()

     turnOn():void {
        this.motor.turnOn()
     }
     speedOn():void{
        this.motor.speedOn()
     }
     turnOff (): void {
        this.motor.turnOff()
     }
     
}   
export class Motor {
    turnOn():void {
         console.log(" o carro esta ligado")
    }
    speedOn():void {
        console.log("o carro esta acelerando")
    }
    turnOff():void{
        console.log("o carro esta DESLIGADO")
    }
}

const carro = new Carro()
carro.turnOn()