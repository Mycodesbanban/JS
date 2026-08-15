import { CarinhoDeComprasLegacy } from "./carrinhodecompras"
import { Message } from "./Message"
import { SaveOrder } from "./SaveOrder"

export class Order {
        private orderStatus: "open"| "close" = "open" // 
        constructor(private readonly cart: CarinhoDeComprasLegacy, private readonly message:Message,private readonly save:SaveOrder){}
     finalizarcomprar(): void {
        if(this.cart.vazio()) {
            console.log("seu carrinho esta vazio baitola")
            return
        }
        // this.orderStatus = "close"
        this.message.sendMessage("sei pedido foi confirmando, aguarde em sua porta")
        this.save.saveOrder()
        this.cart.clear()
    }
}