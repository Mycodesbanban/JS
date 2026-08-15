type Product = {name:string, price:number}

export class CarinhoDeCompras{
    private readonly _items: Product[] = []
    private orderStatus: "open"| "close" = "open"


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

    finalizarcomprar(): void {
        if(this.vazio()) {
            console.log("seu carrinho esta vazio baitola")
            return
        }
        this.orderStatus = "close"
        this.sendMessage("seu pedido foi confirmando, fique no aguardo da entrega ")
        this.saveOrder()
        this.clear()
    }
    sendMessage(msg:string):void  {
        return console.log(msg)
    }
    saveOrder (): void {
        console.log("pedido salvo")
    }
    clear():void{
        this._items.length = 0
    }

    vazio():boolean {
        return this._items.length === 0 
    }
}
