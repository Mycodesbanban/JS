// A função Object.keys() é um método embutido em JavaScript que retorna um array contendo os nomes (ou chaves) das propriedades enumeráveis de um objeto. Este método é útil para iterar sobre as chaves de um objeto e acessar seus valores correspondentes.
// sintaxe
// Object.keys(obj);
// O método retorna um array contendo as chaves do objeto. As chaves são retornadas na mesma ordem em que aparecem no objeto.

// O método Object.values() é uma função embutida em JavaScript que retorna um array contendo os valores das propriedades enumeráveis de um objeto.
// Sintaxe
// Object.values(obj);
// O método retorna um array contendo os valores das propriedades enumeráveis do objeto. Os valores são retornados na mesma ordem em que as chaves aparecem no objeto.

// O método Object.entries() é uma função embutida em JavaScript que retorna um array contendo pares de chave-valor de um objeto. Cada par é representado como um array, onde o primeiro elemento é a chave e o segundo elemento é o valor correspondente. 
// sintaxe
// Object.entries(obj);
// O método retorna um array de arrays, onde cada sub-array contém dois elementos: a chave e o valor da propriedade correspondente.

// O método Object.assign() é uma função embutida em JavaScript que é usada para copiar as propriedades de um ou mais objetos de origem para um objeto de destino. Este método é útil para mesclar objetos, criar cópias rasas de objetos e adicionar propriedades a objetos existentes.
// sintaxe
// Object.assign(destino, ...fontes);
// destino: O objeto que receberá as propriedades copiadas.
// ...fontes: Um ou mais objetos de origem cujas propriedades serão copiadas para o objeto de destino.

// O método retorna o objeto de destino após a cópia das propriedades.

const pesssoa = {
    nome:"rebeca",
    idade:2,
    peso:182

}
console.log(Object.keys(pesssoa)) //[ 'nome', 'idade', 'peso' ]
console.log(Object.values(pesssoa)) //[ 'rebeca', 2, 182 ]
console.log(Object.entries(pesssoa)) //[ [ 'nome', 'rebeca' ], [ 'idade', 2 ], [ 'peso', 182 ] ]

// Exemplo usando .forEach
Object.entries(pesssoa).forEach(e=>{
    console.log(`${e[0]}: ${e[1]}`)
})

// usando operadores Destructuring 
Object.entries(pesssoa).forEach(([chave , valor])=>{
    console.log(`${chave}: ${valor}`)
})
Object.defineProperty(pesssoa,'datadenacimento',{
    enumerable:true,
    writable:false,
    value: "01/02/88"
})
pesssoa.datadenacimento="01/01/2017"
console.log(pesssoa.datadenacimento)// 01/02/88
console.log(Object.keys(pesssoa))//[ 'nome', 'idade', 'peso', 'datadenacimento' ]

// Object.assign (Ecascript2015)
const dest={a:1}
const o1={b:2}
const o2={c:3,a:4}
const obj=Object.assign(dest, o1, o2)
Object.freeze(obj)
obj.c=1234
console.log(obj)