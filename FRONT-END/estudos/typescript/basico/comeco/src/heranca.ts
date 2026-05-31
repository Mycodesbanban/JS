export class Pessoa { // super class 
    nome:string
    sobrenome:string
    constructor(nome: string, sobrenome:string){
        this.nome = nome
        this.sobrenome = sobrenome
    }
    getName():string{
        return this.nome
    }
}
export class Merda extends Pessoa {
    getName():string {
         "bogundo" + this.nome + "avidadou" + this.sobrenome + "xotuduuuuu" 
         return super.getName() // usamos a plavra super pra ter acesso a super class 
         
        
    }
}

const aluno = new Merda("boga", "gay")
console.log(aluno.getName())