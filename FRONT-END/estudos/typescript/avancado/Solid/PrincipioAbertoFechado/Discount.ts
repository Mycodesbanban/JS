export abstract class Desconto {
    
    abstract calcular(value:number):number  

}

export class Five extends Desconto {
    private readonly desconto = 0.5
    calcular(value: number): number {
        return value - value * this.desconto
    }
}