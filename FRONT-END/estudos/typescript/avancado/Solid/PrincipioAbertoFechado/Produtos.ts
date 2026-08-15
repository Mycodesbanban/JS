import { CarinhoDeComprasLegacy } from "./carrinhodecompras";

export class Produto implements CarinhoDeComprasLegacy {
constructor(public name:string, public price:number ){}
}