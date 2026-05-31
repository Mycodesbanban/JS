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
    // metodo static
    static falaOi():void{
        console.log("OI")
    }

    static criarPessoa(nome:string, sobrenome:string):Pessoa{ // cria uma instancia da propria classe 
        return new Pessoa(nome, sobrenome)
        
    }
    static idadePadrao= 0
    static cpfPadrao = "000.000.000-00" // podemos usar o atributo ja definido
}
export class Merda extends Pessoa {
    getName():string {
         "bogundo" + this.nome + "avidadou" + this.sobrenome + "xotuduuuuu" 
         return super.getName() // usamos a plavra super pra ter acesso a super class 
         
        
    }
}

const aluno = new Merda("boga", "gay")
console.log(aluno.getName())

// podemos acessar o metodo static pela a classe 
Pessoa.falaOi()
const pessoa =Pessoa.criarPessoa("maycon", "bogudo")
console.log(pessoa)