// é a mesma coisa de criar uma função contrutora

class Pessoa {
    constructor(nome , sobrenome){ // inicializar um objeto quando ele é criado
        this.nome = nome
        this.sobrenome = sobrenome

    }

    fala(){
        console.log(`${this.nome} está falando`)
    }   
}

const p1 = new Pessoa("Luiz" , "Miranda"); //atribuindo o nome e sobrenome 
console.log(p1)

