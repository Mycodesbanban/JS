// restricoes do generic (constraints)


type ObterChaveFn  = <O, K extends keyof O >(Object: O, chave:K) => O[K]


const obterChae : ObterChaveFn = (obj, chave) => obj[chave]


const animal = {
    cor:"preto",
    vacinas:["vacina1", "vacina2"]

 };
 const vacinas = obterChae(animal, "vacinas")

 console.log(vacinas)