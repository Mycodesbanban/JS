// herança 6
function aula (nome , video){
    this.nome=nome
    this.video=video

}
const aula1= new aula ("bem vindo", 1234)
const aula2= new aula ("Até breve" , 456)
console.log(aula1 , aula2) // quando temos uma função construtora usar o operador new não so o fato de criar um novo objeto é feito mas tamém o fato de que o prótitipo desse objeto é criado , que aponta para uma função

// simulação que acontece quando criamos o operador new 

function novo (f , ...params){
    const obj = {}
    obj.__proto__=f.prototype
    f.apply(obj , params)
    return obj
}
const aula3=novo(aula , "Bem vindo" ,123)
const aula4 = novo(aula , "Até breve ", 383)
console.log(aula3)
console.log(aula4)