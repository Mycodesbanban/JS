import { CarinhoDeComprasLegacy } from "./carrinhodecompras";
import { Five } from "./Discount";
import { Message } from "./Message";
import { Order } from "./order";
import { SaveOrder } from "./SaveOrder";
const five = new Five()
const carrinho = new  CarinhoDeComprasLegacy(five);
const message = new Message()
const saveOrder = new SaveOrder()
const order = new Order (carrinho, message, saveOrder)
carrinho.additens({name:"aaa",price:55.5})
console.log(carrinho.items)
console.log(carrinho.total())
order.finalizarcomprar()

