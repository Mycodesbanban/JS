// Herança #3
const pai = {nome:"pedro", cordecabelo:"vermelho", }
const filha1 = Object.create(pai)
filha1.nome="ana"
console.log(filha1.cordecabelo) //vermelho 

// continuando
const filha2=Object.create(pai , {
    nome:{value:"bia" , writable:false , enumerable:true}
    // value: O valor da propriedade.
// writable: Um booleano que indica se o valor da propriedade pode ser alterado. O valor padrão é false.
// enumerable: Um booleano que indica se a propriedade aparece durante a iteração sobre as propriedades do objeto (por exemplo, em um loop for...in). O valor padrão é false.
// configurable: Um booleano que indica se a propriedade pode ser deletada do objeto e se seus atributos podem ser alterados. O valor padrão é false.

})
console.log(filha2)
filha2.nome="Carla"
console.log(`${filha2.nome} tem cabelo ${filha2.cordecabelo}`) // já que usamos o pai como parametero esse elemento vai se juntar com a constante que criamos 
console.log(Object.keys(filha1)) // ["nome"]
console.log(Object.keys(filha2)) //["nome"]
for (let key in filha2){
    console.log(key) //nome , cordpcabelo
}
for(let keys in filha2){
    filha2.hasOwnProperty(keys) 
    console.log(keys) 
}




// Object.create() é um método em JS ue permite criar um novo objeto com um protótipo especificado. Esse método é uma maneira poderosa de implementar herança prototípica, pois permite que você crie um novo objeto que herda propriedades e métodos de um objeto existente.

// sintaxe:
// Object.create(proto, propertiesObject);
// proto: O objeto que será usado como protótipo do novo objeto

// propertiesObject (opcional): Um objeto que contém propriedades a serem adicionadas ao novo objeto. Essas propriedades podem ser definidas com atributos como value, writable, enumerable, e configurable.

// hasOwnProperty() é uma função embutida em todos os objetos JS que permite verificar se um objeto possui uma propriedade específica como sua própria propriedade (ou seja, não herdada de seu protótipo).
// sintaxe
// objeto.hasOwnProperty(propriedade)
// objeto: O objeto que você está verificando.

// propriedade: Uma string que representa o nome da propriedade que você deseja verificar.