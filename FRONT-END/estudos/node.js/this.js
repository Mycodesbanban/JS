// this
console.log(this === global); // false
console.log(this === module);// false
console.log(this=== module.exports)// true
console.log(this=== exports)//true

function logthis(){
    console.log("dentro de uma função...")
    console.log(this==exports); // false , dentro de uma função o this não aponta para exports 
    console.log(this === module.exports);// false , dentro de uma função o this não aponta para exports 
    console.log(this === global); // true, dentro de uma função o this aponta para o global 

    this.perigo = "..." //estou colocando isso no escopo global , já que o this aponta para o escopo global , caso colocasse fora dessa função ficaria dentro de module.exports 
}   

logthis()