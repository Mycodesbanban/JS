// ES8: Object.values/Object.entries

const obj={a:1 , b:2 , c:3}
console.log(Object.values(obj)) // Vai mostrar somente os valores do Objeto

console.log(Object.entries(obj)) // vai mostrar um array de array onde o elemento é um array de chave e valor

// melhorias na Notação literal

const nome = 'Carla'
const pessoa = {
    nome , 
    ola(){
        return "Oi seus pohas "
    }
}

console.log(pessoa.nome , pessoa.ola());

// Class 
class Animal {} // Classes são um modelo para criar objetos.
class cachorro extends Animal{
    falar(){
        return "auauauauau"
    }
} // extends: permite que uma classe herde propriedades e métodos de outra classe

console.log( new cachorro().falar()) // auauaauua