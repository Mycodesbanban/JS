// Desafio da função contrutora

function pessoa(nome) {
        this.nome=nome
    
    this.falar=function(){
        console.log(`Meu nome é ${this.nome}`)
    } 
}

const p1= new pessoa ("João")
p1.falar()
