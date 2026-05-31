// interfaces sao parecidos com tipos 
interface TipoNome{ // interface = modelar uma forma | type alias = modelar qualquer coisa, fazer o que quiser 
    nome:string
}
interface TipoIdade {
     idade:number 
}
interface TipoNomeFull {
    namefull():string
}
interface TypePerson extends TipoIdade, TipoNome, TipoNomeFull{

}


class Gay implements TypePerson { // essa classe pessoa implementa o tipo pessoa 
   
    constructor( public  nome: string,
    public idade:number ){
    }
      namefull(): string{
        return this.nome + " sua idade e " + this.idade
    }
}

const big = new Gay("Big", 23)
console.log(big.namefull())


// Declaration merging

//  juntas esses dois 
interface Gay {
    nome:string
}
interface Gay {
    sobrenome:string
}