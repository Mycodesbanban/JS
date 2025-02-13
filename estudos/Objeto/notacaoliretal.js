// A notação literal de objeto em JS é uma maneira concisa e fácil de criar objetos. Com essa notação, você pode definir um objeto e suas propriedades de forma direta, sem a necessidade de usar funções construtoras ou a palavra-chave new. Essa abordagem é muito comum e amplamente utilizada em JavaScript para criar objetos simples.

// Sintaxe da notação literal de Objeto
// const objeto = {
//     propriedade1: valor1,
//     propriedade2: valor2,
//     metodo1: function() {
//         // código do método
//     },
//     metodo2() {
//         // código do método (sintaxe abreviada)
//     }
// };

// Vantagens da Notação Literal de Objeto
// Simplicidade: A notação literal é fácil de ler e escrever, tornando a criação de objetos simples e direta.

// Clareza: A estrutura do objeto é clara e organizada, facilitando a compreensão do que o objeto representa e como ele é usado.

// Flexibilidade: Você pode adicionar, modificar ou remover propriedades e métodos de um objeto a qualquer momento.

// testes 
const a = 1
const b = 2
const c = 3  
const Obj1={a:a , b:b , c:c} //antigamente 
const Obj2={a , b , c} // hoje em dia 
console.log(Obj2, Obj1)

const nome="nota"
const valor=7.71
const obj3={}
obj3[nome]=valor
console.log(obj3)

const obj4 = {nome:valor}
console.log(obj4)

const obj5={
    funcao:function(){
        //...
    }, 
    funcao2(){
        //...
    }
}
console.log(obj5)