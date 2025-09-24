//filter 02
// implimentando o filter 
Array.prototype.filter2= function(callback){
    const newarray=[]
    for ( let i = 0 ; i<this.length; i++){
        if( callback(this[i] , i , this)){
            newarray.push(this[i])
        }
    }
    return newarray
}

const produto = [
    {Nome:"Notebook" , preco:3825 , fragil:true},
    {Nome:"IPad" , preco:3282, fragil:true},
    {Nome:"copo de vidro" , preco:2.38, fragil:true},
    {Nome:"copo de plastico" , preco:2 , fragil:false}
]

let caro= produto => produto.preco >=500
let fragil =  produto => produto.fragil 
let resultado = produto.filter2(caro).filter2(fragil)
console.log(resultado);