// Prototypes 

// JS é baseado em prototipos para passar propriedades e metodos de um para outro

// Definição de prototipo:
// é o termo usado para se referir ao que foi criando pela a primeira vez , sevrindo de modelo/molde para outras futuras produções

function Pessoa (nome , sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + " " + this.sobrenome;
}

Pessoa.prototype.estouAqui="hahahaha" //criando dentro da função contrutora ,sempre que usamos o prototype de uma função construtora , todos os objetos da nossa função construtora terão os objetos criado 

const pessoa1 = new Pessoa ("Luiz" , "O.") // usando a função construtora 
const data = new Date() // função construtora
