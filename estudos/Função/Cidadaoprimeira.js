// Função em JS e Frist-class Object (Citizens), o que significa que podem ser tratadas como qualquer outro valor


// Higher-order function , é uma função que pode fazer pelo menos uma das seguites operações:
// Receber uma ou mais funções como argumentos
// Retornar uma função como resultado

// função pode ser tratado como sendo um dado , sendo um dado pode passa essa função como parâmetro , e conseguimos retorna uma função como resposta

// Função de forma literal 
function fun1(){

}
// Armazenar uma função em variável
const fun2= function(){

}
// Amarzenar uma função em um array
const array = [ function(a , b ){
    return a+ b 

},
fun1 , fun2]
console.log(array[0] ( 2 , 3))


// Amazenar uma função em um atributo de objeto
const obj={}
obj.falar= function(){
    return "Opa!"
}
console.log(obj.falar())

// passar uma função com um parametro com outra função

function run ( fun){
    fun ()
}
run ( function (){
    console.log('Executando...')
})

// Retorna uma função como parametro ou conter uma função
function soma ( a , b ){
    return function( c){
        console.log(a+b+c)
    }
}
soma( 2, 3 )(4)
// ou
const cinco= soma( 2, 3)
cinco(4)
// temos esses dois tipos para fazer

// arguments: sustenta todos os argumentos enviados