// tipo array
// podemos criar os array assim:

// Array<Type> (generico)

// type[] ou assim 
function multiplica (...args:Array<number>) {
    return args.reduce((soma, valor) => soma * valor, 1)
}

console.log(multiplica(3,2))


function conectarStrings (...args: string[]):string{
  return args.reduce((ac, valor) => ac + valor)
}

console.log(conectarStrings("ma", "ycu"))

function UpperCase (...args: string[]):string[]{
    return args.map((ar)=> ar.toUpperCase())
}

console.log(UpperCase("boga sujo nao faz mal pra voce pois seu sebo ja passou de 5 mil bb"))

