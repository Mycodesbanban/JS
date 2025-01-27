// função bird e this 
// Em Js o This  refere-se ao objeto que está sendo referenciado no contexto atual de execução. Seu valor pode variar dependendo de como a função é chamada, se está em um método de objeto, em uma função global ou em um modo estrito, podendo até ser undefined em certas situações. ### Contextos de this

// Contexto Global: Quando this é usado fora de qualquer função, ele se refere ao objeto global. Em navegadores, isso é o objeto window

// Funções Normais: Em uma função normal, se não estiver em modo estrito, this se refere ao objeto global. Se estiver em modo estrito, this será undefined.

// exemplo de uso 

console.log(this); // No navegador, isso será o objeto window


// metodo obj
// exemplo
const obj = {
    nome: 'Maria',
    saudacao: function() {
      return 'Olá, meu nome é ' + this.nome;
    }
  };
  
  console.log(obj.saudacao()); // "Olá, meu nome é Maria"

// função Normal 

// exemplo

function mostrarThis() {
    console.log(this);
  }
  
  mostrarThis(); // No navegador, isso será o objeto window

// Função Arrow
// Arrow Functions: O this em funções arrow é lexicamente definido, ou seja, ele herda o valor de this do contexto em que foi definido, não do contexto em que é chamado.


// exemplo

const obj3 = {
    nome: 'João',
    saudacao: () => {
      console.log('Olá, meu nome é ' + this.nome); // `this` não se refere a `obj`
    }
  };
  
  obj3.saudacao(); // "Olá, meu nome é undefined"


// Metodos call apply.
// call e apply: Permitem que você chame uma função com um valor específico de this. A diferença é que call aceita argumentos separados, enquanto apply aceita um array de argumentos.


// exemplo
function apresentar() {
    console.log('Meu nome é ' + this.nome);
  }
  
  const pessoa = { nome: 'Carlos' };
  
  apresentar.call(pessoa); // "Meu nome é Carlos"
  apresentar.apply(pessoa); // "Meu nome é Carlos"


//   O que é bind()
// A função bind() é um método disponível em funções JavaScript que permite criar uma nova função com um valor específico de this. Isso é útil quando você deseja garantir que uma função use um determinado contexto, independentemente de como ela é chamada.

// Vantagens do bind()
// Controle do Contexto: Permite que você controle o valor de this em funções, o que é especialmente útil em callbacks e eventos.

// Criação de Funções Personalizadas: Você pode criar funções que sempre usam um determinado contexto, facilitando a reutilização de código.

// Parcial Application: Você pode pré-definir alguns argumentos para a função, criando uma nova função que pode ser chamada mais tarde.

// Sintaxe
// const novaFuncao = funcao.bind(thisArg[, arg1[, arg2[, ...]]]);

// thisArg dve ser usando como o this quando uma nova função e chamada

// arg1 , arg2 serão passados para a função quando ela for chamada

// exemplod de uso
function apresentar() {
    console.log('Meu nome é ' + this.nome);
}

const pessoa2 = {
    nome: 'Carlos'
};

// Usando bind para definir o valor de `this`
const apresentarCarlos = apresentar.bind(pessoa2);
apresentarCarlos(); // "Meu nome é Carlos"

// Neste exemplo, a função apresentar é chamada com this definido como o objeto pessoa, mesmo que a função seja chamada fora do contexto do objeto.

// testes

const pessoa3 = {
    saudacao: "Bom dia!",
    falar(){
        console.log(this.saudacao)

    }
}
pessoa3.falar()
const falar= pessoa3.falar
falar() // conflito entre paradigmas : funcional e 00

const falardepessoa=pessoa3.falar.bind(pessoa3)
falardepessoa()