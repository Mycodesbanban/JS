// abstracao : permite isolar der um obejto somente os conceitos execiais pra o funcionamento

export class Pessoa {
    private nome: string; // private: so pode ser acessado dentro da sua propria classe 
    private sobrenome:string
    constructor(nome:string, sobrenome:string){ // funcao onde excuta automaticamente quando cria um objeto, serve pra incializar os valores 
        this.nome = nome
        this.sobrenome= sobrenome
    }
}


// encapsulamento: oculra partes interna de um objeto
export class RemoteControl { constructor(private powershell = false){}
    public turnOn():void { // pode ser acessa fora da classe 
        this.powershell = true
    }
     public turnOFF():void {
        this.powershell 
    }
     public getStatus():boolean {
        return this.powershell 
    }
}
 

// heranca:herda da classe pai

export abstract class Animal { // abstract e um molde incompleto, nao consegue cria objeto com ela 
    constructor(public name:string){

    }
    abstract makeNoise(): void // toda heranca precisa de desse metodo
}

export class Dog extends Animal { // extends, e como pai e filho a genetica do pai vai pra o filho
    makeNoise(): void {
        console.log(`${this.name} auauau`)
    }
}


// polimorfismo: habilidade de assumir formas diferentes 
class AnimalSongs {
    public playSoud (animal:Animal):void{
        animal.makeNoise()
    }
}

const dog = new Dog("zy")
const animalsongs = new AnimalSongs()
animalsongs.playSoud(dog)