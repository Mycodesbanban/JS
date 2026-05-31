export class Escritor{
    private _ferramenta:Ferramenta | null = null
   constructor(private _nome:string){}
   set ferramenta(ferramenta : Ferramenta){
     this._ferramenta = ferramenta
   }
   get nome(): string {
        return this._nome
    }
   escrever():void{
    if(this._ferramenta === null){
         console.log("nao posso escrever sem minha ferramenta de trabalho")
         return
    }
    this._ferramenta.escrever()
   }
}
export abstract class Ferramenta {
    constructor(private _nome:string){}
    abstract escrever():void
    get nome():string{
        return this._nome
    }
}

export class Caneta extends Ferramenta{
    escrever(): void {
        console.log(`minha caneta escreve tao bem quanto as ondas do seu corpo nu:${this.nome} queima a roscaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`)
    }
}

export class Maquina extends Ferramenta {
    escrever(): void {
        console.log("queria apenas ter um boga limpo mas pra salvar minha familia deixo ele sujo")
    }
}

const escritor = new Escritor("Bogudo")
const caneta = new Caneta("bogh")
const maquinaEscrever = new Maquina("bsbsbsbsbsbsbsbsbsbsbhsbsbbsbsbsbsbsbsbsbsbsbsbsbsbsbs")
console.log(escritor.nome)
console.log(maquinaEscrever.nome)
console.log(caneta.nome)
escritor.escrever()