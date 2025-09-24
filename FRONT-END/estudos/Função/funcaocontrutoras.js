// Funções construtoras 
// Em JS as  funções construtoras são uma maneira de criar objetos. Elas permitem que você defina um modelo (ou "classe") para criar múltiplas instâncias de objetos com as mesmas propriedades e métodos. As funções construtoras são uma parte fundamental da programação orientada a objetos

// como funciona uma função construtora

// Definição: Uma função construtora é definida como uma função normal , mas deve ser chamada com a palavra-chave new. Isso cria um novo objeto e vincula o contexto this à nova instância , e deve ser criada com letras Maiusculas.

// Propriedades e Métodos: Dentro da função construtora, você pode definir propriedades e métodos que serão adicionados ao objeto criado.

// Uso do this: A palavra-chave this refere-se ao objeto que está sendo criado.

// sintaxe basica

function NomeDaFuncao(param1, param2) {
    this.propriedade1 = param1;
    this.propriedade2 = param2;

    this.metodo = function() {
        // lógica do método
    };
}
// exemplo de função construtora
function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;

    this.info = function() {
        return `${this.marca} ${this.modelo} (${this.ano})`;
    };
}

// Criando instâncias de Carro
const carro1 = new Carro('Toyota', 'Corolla', 2020);
const carro2 = new Carro('Honda', 'Civic', 2021);

console.log(carro1.info()); // "Toyota Corolla (2020)"
console.log(carro2.info()); // "Honda Civic (2021)"

// Usando prototype
// Uma prática comum ao trabalhar com funções construtoras é usar o objeto prototype para definir métodos que podem ser compartilhados entre todas as instâncias. Isso economiza memória, pois o método não é criado para cada instância.
function Carro2(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

// Adicionando um método ao prototype
Carro2.prototype.info = function() {
    return `${this.marca} ${this.modelo} (${this.ano})`;
};

// Criando instâncias de Carro
const carro3 = new Carro('Toyota', 'Corolla', 2020);
const carro4 = new Carro('Honda', 'Civic', 2021);

console.log(carro4.info()); // "Toyota Corolla (2020)"
console.log(carro3.info()); // "Honda Civic (2021)"
// testes
function moto(velocidadeMaxima=400, delta=10) {
    // atributo privado
    let velocidadeatual=0
    // metodo publico
    this.acelerar=function(){
        if(velocidadeatual + delta <= velocidadeMaxima){
            velocidadeatual += delta
        }else{
            velocidadeatual=velocidadeMaxima
        }
        // metodo publico
        this.getvelocidadeatual=function(){
            return velocidadeatual
        }
    }

}
const pop= new moto
pop.acelerar()
console.log(pop.getvelocidadeatual())

const c = new moto(700 , 40)
c.acelerar()
c.acelerar()
c.acelerar()
console.log(c.getvelocidadeatual())
// Considerações Finais
// Nomenclatura: É uma convenção nomear funções construtoras com a primeira letra maiúscula para diferenciá-las de funções regulares.

// Instâncias: Cada vez que você usa a palavra-chave new, uma nova instância do objeto é criada, e as propriedades e métodos definidos na função construtora são atribuídos a essa instância.

// Herança: Funções construtoras podem ser usadas em conjunto com a herança prototípica para criar hierarquias de objetos.