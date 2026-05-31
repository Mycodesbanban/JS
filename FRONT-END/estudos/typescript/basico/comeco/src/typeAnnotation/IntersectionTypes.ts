// continue se for true &

type TemNomeGay = {nome:string}
type temSobrenomeGay = {sobrenome:string}
type temIdadeGay = {idade:number}

type Pessoa = TemNomeGay & temSobrenomeGay & temIdadeGay

const pessoa: Pessoa ={
    nome:"luiz",
    sobrenome:"paulo",
    idade:12
}
console.log(pessoa)

export default 1