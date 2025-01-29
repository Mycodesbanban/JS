let comparacomthis= function(param){
    console.log(this=== param)

}
comparacomthis(global) // true
// nesse caso o this no node ele aponta ao objeto global , no brower ele vai ser true com o objeto window


const obj= {
}
comparacomthis= comparacomthis.bind(obj)
comparacomthis(global)
comparacomthis(obj)
// agora o escopo global o resultado agora foi falso , mas como o obj foi true

// vamos tenta com um arrow function
let comparacomthisArrow= param=> console.log(this===param)
comparacomthisArrow(global)
comparacomthisArrow(module.exports) 
comparacomthisArrow(this)
// se colomos no primeiro caso que nós fizemos o this seria falso , já nesse caso o this foi verdadeiro

// vamos usar o bind dentro de uma função arrow para ver se conseguimos mudar a referência do this

comparacomthisArrow = comparacomthisArrow.bind(obj)
comparacomthisArrow(obj)
// a arrow function não foi possivel mudar com um bind , então o resultado vai ser falso 
comparacomthisArrow(module.exports)