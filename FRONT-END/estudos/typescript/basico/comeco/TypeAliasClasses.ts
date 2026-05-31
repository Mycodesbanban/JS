type Tipo = {
     nome: string
     idade:number 
     nomeCompleto(): string
}
class Gay implements Tipo { // essa classe pessoa implementa o tipo pessoa 
   
    constructor( public  nome: string,
    public idade:number ){
    }
      nomeCompleto(): string{
        return this.nome + " sua idade e " + this.idade
    }
}

const big = new Gay("Big", 23)
console.log(big.nomeCompleto())