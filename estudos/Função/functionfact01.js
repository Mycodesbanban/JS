// Função factory
// é um padrão de design em JS que permite criar e retornar objetos ou funções de forma dinâmica. Em vez de usar um construtor com a palavra-chave new, uma função factory cria e retorna um novo objeto ou função cada vez que é chamada. Esse padrão é útil para encapsular a lógica de criação de objetos e pode ser usado para criar instâncias de objetos com propriedades e métodos específicos.

// Simplificando: é uma função que retorna um objeto

// Exemplo:
function criarCarro(marca, modelo) {
    return {
        marca: marca,
        modelo: modelo,
        acelerar: function() {
            console.log(`O carro ${this.marca} ${this.modelo} está acelerando!`);
        },
        frear: function() {
            console.log(`O carro ${this.marca} ${this.modelo} está freando!`);
        }
    };
}

const carro1 = criarCarro('Toyota', 'Corolla');
const carro2 = criarCarro('Honda', 'Civic');

carro1.acelerar(); // O carro Toyota Corolla está acelerando!
carro2.frear();    // O carro Honda Civic está freando!

// Vantagem das funções factory
// Encapsulamento: As funções factory permitem encapsular a lógica de criação de objetos, tornando o código mais organizado e modular.

// Flexibilidade: Você pode facilmente modificar a lógica de criação de objetos sem afetar o restante do código.

// Evita o Uso de new: Ao usar funções factory, você não precisa se preocupar com o uso da palavra-chave new, o que pode evitar alguns erros comuns relacionados à criação de objetos.

// função factory com closures
// As funções factory também podem usar closures para encapsular dados

// exemplo:
 function criarContador() {
    let contador = 0; // Variável privada

    return {
        incrementar: function() {
            contador++;
            return contador;
        },
        decrementar: function() {
            contador--;
            return contador;
        },
        obterValor: function() {
            return contador;
        }
    };
}

const contador1 = criarContador();
console.log(contador1.incrementar()); // 1
console.log(contador1.incrementar()); // 2
console.log(contador1.decrementar());  // 1
console.log(contador1.obterValor());   // 1

const contador2 = criarContador();
console.log(contador2.incrementar()); // 1 (novo contador, começa do zero)

// teste : factory simples
function criar(){
    return{
        nome:"Ana",
        sobrenome:"Silva"
    }
}
console.log(criar())
