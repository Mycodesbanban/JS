// map 03#
//implimentando o map
Array.prototype.map2=function(callback){
    const newarray=[]
    for( let i = 0 ; i < this.length; i++){
        newarray.push(callback(this[i] , i , this)) 
        //Representa o item que será aplicado a transformação da callback:

        // this[i]
        // O indice do item:
        
        // i
        // O contexto:
        
        // this
        
    }
    return newarray
}
const carrinho=[
    '{"nome": "boracha" , "preco":3.45}',
    '{"nome":"cardeno" , "preco":33.37}',
    '{"nome":"kit de lapis", "preco":12.29}',
    '{"nome":"caneta" , "preco":1.3}'
];
const paraObjeto=json => JSON.parse(json);
const apenaspreco=produto => produto.preco;

const resultado = carrinho.map2(paraObjeto).map2(apenaspreco);
console.log(resultado); 