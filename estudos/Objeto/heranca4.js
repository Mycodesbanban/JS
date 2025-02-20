function meu(){

}
console.log(meu.prototype)
const obj1 = new meu
const obj2 = new meu
console.log(obj1.__proto__) // Objeto {}
console.log(obj2.__proto__) // Objeto {}
console.log(obj1.__proto__ === obj2.__proto__) // true
console.log(meu.prototype=== obj1.__proto__)// true

meu.prototype.nome="Anômimo"
meu.prototype.falar=function (){
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}
obj1.falar()// Bom dia! Meu nome é Anônimo
obj2.nome="Rafel" 
obj2.falar() // Bom dia! Meu nome é Rafael

const obj3={

}
obj3.__proto__=meu.prototype 
obj3.__proto__=meu.prototype
// resumo 
console.log((new meu).__proto__=== meu.prototype)//true
console.log(meu.__proto__ === Function.prototype) // Function.prototype que você criar terá acesso a todas as propriedades e métodos definidos em JS
console.log(Function.prototype.__proto__=== Object.prototype)//true
console.log(Object.prototype.__proto__) //Null
console.log(Object.prototype.__proto__=== undefined)// false
console.log(Object.prototype.__proto__===null) // true



