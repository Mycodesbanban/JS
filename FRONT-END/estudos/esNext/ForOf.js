for(let letras  of "Cord3r"){ // é uma estrutura de repetição  usada para percorrer elementos de iteráveis como arrays, strings, Maps, Sets, etc.. ,  ele impera em cima de valores 
    console.log(letras)
}

const assutosEcma =["Map" , "Set" , "Promise"]

for(let i of assutosEcma){
    console.log(i)
}

for(let assunto of assutosEcma){
    console.log(assunto)
}

// usando Map no For...of
const assuntoMap = new Map ([
    ["Map" , {abordado: true}],
    ["Set" , {abordado:true}],
    ["promise", {abordado:false}]
])

for (let assunto of assuntoMap){
    console.log(assunto)
}

for (let chave of assuntoMap.keys()){ // O método keys  retorna um array dos nomes das propriedades enumeráveis com chave de string do próprio objeto.
    console.log(chave)
}

for ( let valor of assuntoMap.values()){ // values: torna um array dos valores das propriedades enumeráveis com chave de string do próprio objeto.
    console.log(valor )
}

for (let[ch , vl] of assuntoMap.entries()){ // entries:retorna um array de pares chave-valor de propriedades enumeráveis com chave de string do próprio objeto
    console.log(ch , vl)
}

const s = new Set(["a" , "b" , "c"])
for (let letra of s ){
    console.log(letra)
}