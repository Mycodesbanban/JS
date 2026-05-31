// type CoresObj={
//     vermelho:string,
//     azul:string
// }

const coresObj={
    vermelho:"red",
    azul:"blue"
}

function TraduzirCor (cor:"vermelho"| "azul", cores: typeof coresObj){

    return cores[cor]
}

console.log(TraduzirCor("vermelho", coresObj))


// usando chaves com tipos

type Veiculo= {
    marca:string;
    ano:string
}
type Car ={
    brand: Veiculo["marca"]
    year:string
    name:string
}


const carro: Car ={
    brand:"ford",
    year:"5334",
    name:"boga"
}

console.log(carro)