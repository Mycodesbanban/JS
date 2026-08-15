interface MaquinaBolos {
    nome:string,
    valor:number,
    quantidade:number,
}
 
class Bolo implements MaquinaBolos {
    constructor(public nome:string, public valor:number, public quantidade:number ){}
}

const bolos:Bolo[] = [
    new Bolo("chocolate", 10.90, 80),
    new Bolo("morango", 90.90,1239),
    new Bolo("abacaxudo",33.3,93)
]

const VenderBolo = (nome:string, quantidade:number) => {
    const bolo = bolos.find((bolo) => bolo.nome === nome )
    if(!bolo){
        return "bolo nao encontrado"
    }
    if(quantidade <= bolo.quantidade){
        return `obrigado por comprar o bolo de ${nome} com ${quantidade} quantidades O valor e de ${bolo.valor * quantidade} `
    }
  
}

const cliente1 = VenderBolo("chocolate", 5)
console.log(cliente1)


