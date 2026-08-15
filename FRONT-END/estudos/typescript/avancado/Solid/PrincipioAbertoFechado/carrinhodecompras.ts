import { Desconto } from "./Discount"
import type { Product } from "./interfaces/Product"

export class CarinhoDeComprasLegacy{
    private readonly _items: Product[] = []


    constructor(private readonly desconto:Desconto){}

    additens(item:Product):void {
        this._items.push(item)
    }

    removeItem (index:number):void {
        this._items.splice(index,1)
    }



    get items(): Readonly<Product[]>{
        return this._items
    }

    total():number {
        return +this._items
        .reduce((i, total) => i + total.price, 0)
        .toFixed(2)
    }
    totalComDesconto():number {
        return this.desconto.calcular(this.total())
    }

   
   

    clear():void{
        this._items.length = 0
    }

    vazio():boolean {
        return this._items.length === 0 
    }
}
