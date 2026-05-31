
export class VoteApp{

    constructor (private linguagem:string[]){

    }
    votos: {[chave:string]:number} = {}
    

    iniciarVotacao(){
        for (let linguagem of this.linguagem){
             this.votos[linguagem] =+ 0 
        }
    }

    votar(nome:string){
        if(this.votos[nome] !== undefined){
            return this.votos[nome]++
        }
        
    }

    resultado(){
        console.log(this.votos)
    }


}


const app = new VoteApp([
    "python",
    "java",
    "c#"
])
app.iniciarVotacao()
app.votar("java")
app.votar("java")
app.votar("python")
app.votar("java")
app.votar("java")
app.votar("c#")
app.votar("java")
app.resultado()


