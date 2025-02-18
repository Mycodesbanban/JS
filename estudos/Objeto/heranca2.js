// Cadeia de protótipos (prototype chain)
// É um conceito fundamental em JS que descreve a forma como a herança é implementada na linguagem
// como funcionar a Cadeia de protótipos A cadeia de protótipos é a sequência de objetos que o percorre para encontrar uma propriedade ou método. Essa cadeia pode ser visualizada como uma linha de objetos, onde cada objeto aponta para seu protótipo.
Object.prototype.atri0="Z" //não é recomendado

const avo ={atri1:"A"}
const pai = {__proto__ : avo , atri2:"B" , atri3:"%"}
const filho={__proto__:pai,atri3:"C"}
console.log(filho.atri1)//A  
console.log(filho.atri0)//Z
console.log(filho.atri3 , filho.atri0 , filho.atri1)
const carro = {
    velatual:0,
    velemax:2784,
    acelerarmais(delta){
        if ( this.velatual+delta<=this.velemax){
            this.velatual += delta
        }else{
            this.velatual=this.velemax
        }
    }, 
    status(){
        return`${this.velatual}KM/H de ${this.velemax}KM/H`
    }
}

const ferrari={
    modelo:"F40",
    velemax:3474, // temos aqui um shadowing que é à situação em que uma variável ou método em um escopo mais interno (como uma função ou um bloco) tem o mesmo nome que uma variável ou método em um escopo mais externo (como um escopo global ou de classe)
}
const volvo={
    modelo:"BMU97",
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo , carro)

console.log(ferrari)
console.log(volvo)
volvo.acelerarmais(100)
console.log(volvo.status())

ferrari.acelerarmais(300)
console.log(ferrari.status())