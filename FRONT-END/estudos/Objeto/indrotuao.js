// CÓDIGO NÃO EXECUTÁVEL!!!
// procedural  é um paradigma de programação que se baseia na ideia de que um programa pode ser dividido em procedimentos ou rotinas. Esses procedimentos são sequências de instruções que realizam uma tarefa específica e podem ser chamados em diferentes partes do programa

// Embora JavaScript seja uma linguagem multiparadigma que suporta programação orientada a objetos e funcional, você pode usar a programação procedural para organizar seu código de maneira clara e modular.

// Características da Programação Procedural em JavaScript

// funções:

// As funções são o principal meio de encapsular lógica e podem ser chamadas em diferentes partes do código.
// Variáveis:

// Você pode usar variáveis para armazenar dados e estados, que podem ser manipulados por funções.
// Controle de Fluxo:

// Estruturas de controle, como if, for, while, e switch, são usadas para controlar a execução do código.
// Modularidade:

// O código pode ser organizado em módulos ou arquivos separados, facilitando a manutenção e a reutilização



// Vantagens da Programação Procedural em JavaScript
// Simplicidade: É fácil de entender e implementar, especialmente para problemas simples.
// Reutilização de Código: Funções podem ser reutilizadas em diferentes partes do programa, reduzindo a duplicação de código.
// Facilidade de Manutenção: A modularidade facilita a manutenção e a atualização do código.
 

// Desvantagens da Programação Procedural em JavaScript
// Escalabilidade: À medida que os programas se tornam mais complexos, a programação procedural pode se tornar difícil de gerenciar.
// Dificuldade em Modelar Problemas Complexos: A programação orientada a objetos pode ser mais adequada para modelar problemas complexos, pois permite encapsular dados e comportamentos.

processamento(valor1 , valor2 , valor3)

// OO A programação orientada a objetos (POO) é um paradigma de programação que utiliza "objetos" para representar dados e comportamentos. Esse paradigma é amplamente utilizado em muitas linguagens de programação, incluindo JavaScript, Python, Java, C++, entre outras. A POO é baseada em alguns conceitos fundamentais que ajudam a organizar e estruturar o código de maneira mais intuitiva e modular.


// Conceitos Fundamentais da Programação Orientada a Objetos
// Objetos:

// Um objeto é uma instância de uma classe que encapsula dados (atributos) e comportamentos (métodos). Por exemplo, um objeto carro pode ter atributos como cor, modelo e ano, e métodos como acelerar() e frear().
// Classes:

// Uma classe é um modelo ou um "molde" para criar objetos. Ela define os atributos e métodos que os objetos daquela classe terão. Por exemplo, a classe Carro pode definir atributos como cor e modelo, e métodos como acelerar().
// Encapsulamento:

// O encapsulamento é o conceito de esconder os detalhes internos de um objeto e expor apenas o que é necessário. Isso é feito usando modificadores de acesso (como private, protected e public em algumas linguagens) para controlar a visibilidade dos atributos e métodos.
// Herança:

// A herança permite que uma classe (chamada de classe filha ou subclasse) herde atributos e métodos de outra classe (chamada de classe pai ou superclasse). Isso promove a reutilização de código e a criação de hierarquias de classes. Por exemplo, uma classe Veiculo pode ser a superclasse de Carro e Moto.
// Polimorfismo:

// O polimorfismo permite que diferentes classes implementem métodos com o mesmo nome, mas com comportamentos diferentes. Isso é útil para tratar objetos de diferentes classes de maneira uniforme. Por exemplo, tanto a classe Carro quanto a classe Moto podem ter um método acelerar(), mas cada um pode implementar esse método de maneira diferente.


// Vantagens da Programação Orientada a Objetos
// Modularidade: O código é organizado em classes e objetos, facilitando a manutenção e a compreensão.
// Reutilização de Código: A herança permite que classes reutilizem código

objeto= {
    valor1 , 
    valor2,
    valor3 ,
    processamento(){
        // ...
    }
}

objeto.processamento() // O foco passou a ser o objeto 


// principios importantes:
// 1-A abstração é um dos conceitos fundamentais da programação orientada a objetos (POO). Ela se refere à prática de ocultar os detalhes de implementação de um objeto e expor apenas as características e comportamentos essenciais que são relevantes para o usuário. A abstração permite que os desenvolvedores se concentrem no que um objeto faz, em vez de como ele faz.raçao:

// conceitos da abstração

// Ocultação de Detalhes:

// A abstração permite que os detalhes internos de um objeto sejam escondidos, de modo que o usuário interaja com o objeto através de uma interface simplificada. Isso reduz a complexidade e facilita o uso do objeto.
// Modelagem de Objetos:

// A abstração ajuda a modelar objetos do mundo real em termos de suas propriedades e comportamentos. Por exemplo, um objeto Carro pode ser modelado com atributos como marca, modelo e métodos como acelerar() e frear().
// Interfaces:

// Em muitas linguagens de programação, a abstração é implementada através de interfaces ou classes abstratas. Uma interface define um conjunto de métodos que uma classe deve implementar, mas não fornece a implementação desses métodos.


// encapsulamento  Ele se refere à prática de agrupar dados (atributos) e comportamentos (métodos) que operam sobre esses dados em uma única unidade, chamada de objeto. Além disso, o encapsulamento permite controlar o acesso a esses dados, protegendo-os de modificações indesejadas e garantindo que a interação com o objeto ocorra de maneira controle

// caracteristicas do Encapsulamento

// Agrupamento de Dados e Métodos:

// O encapsulamento permite que os dados e os métodos que manipulam esses dados sejam agrupados em uma única entidade (objeto). Isso ajuda a organizar o código e a torná-lo mais modular.
// Controle de Acesso:

// O encapsulamento permite definir quais atributos e métodos são acessíveis fora do objeto. Isso é feito usando modificadores de acesso, como private, protected e public em muitas linguagens de programação.
// private: O atributo ou método só pode ser acessado dentro da própria classe.
// protected: O atributo ou método pode ser acessado dentro da classe e em subclasses.
// public: O atributo ou método pode ser acessado de qualquer lugar.
// Interface Pública:

// O encapsulamento geralmente envolve a criação de uma interface pública que define como os usuários do objeto podem interagir com ele. Isso pode incluir métodos para acessar ou modificar os dados do objeto.


//hernaça (prototype)A herança é um dos conceitos fundamentais da programação orientada a objetos (POO) e permite que uma classe (ou objeto) herde propriedades e métodos de outra classe (ou objeto). Em JavaScript, a herança é frequentemente implementada através do sistema de protótipos, que é uma característica central da linguagem

// Vantagens da Herança Prototípica
// Reutilização de Código: A herança permite que você reutilize código, evitando a duplicação de métodos e propriedades comuns.
// Organização: Ajuda a organizar o código em uma hierarquia lógica, facilitando a compreensão e a manutenção.
// Polimorfismo: Permite que diferentes classes implementem métodos com o mesmo nome, mas com comportamentos diferentes.

// polimorfismo  é um conceito da programação orientada a objetos que permite que objetos de diferentes classes sejam tratados como objetos de uma classe comum. Isso significa que métodos com o mesmo nome podem se comportar de maneira diferente, dependendo da classe do objeto que os invoca. ### 
// Tipos de Polimorfismo
// Polimorfismo em Tempo de Compilação (Sobrecarga):

// Ocorre quando uma classe possui vários métodos com o mesmo nome, mas com diferentes parâmetros.
// Permite que o compilador escolha qual método chamar com base nos argumentos fornecidos.
// Polimorfismo em Tempo de Execução (Sobrescrita):

// Ocorre quando um método em uma subclasse redefine um método da superclasse.
// A decisão sobre qual método chamar é feita em tempo de execução, permitindo que o comportamento do método varie conforme o tipo do objeto.
// Vantagens do Polimorfismo
// Flexibilidade: O mesmo código pode operar em diferentes tipos de objetos, facilitando a adaptação a novas classes.

// Reutilização de Código: Permite que novas classes sejam adicionadas sem a necessidade de modificar o código existente, promovendo a manutenção e a evolução do sistema.

// Melhoria na Manutenção: O código se torna mais modular e fácil de entender, pois as classes podem compartilhar comportamentos comuns.


