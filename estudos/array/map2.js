// map 02# 
const carrinho=[
    '{"nome": "boracha" , "preco":3.45}',
    '{"nome":"cardeno" , "preco":33.37}',
    '{"nome":"kit de lapis", "preco":12.29}',
    '{"nome":"caneta" , "preco":1.3}'
];
// retorna um array com apenas os preços 
const paraObjeto=json => JSON.parse(json);
const apenaspreco=produto => produto.preco;

const resultado = carrinho.map(paraObjeto).map(apenaspreco);
console.log(resultado); 
