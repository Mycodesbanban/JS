// tagged templates - processa o template dentro de uma função

function tag (partes , ...valores){ // usamos o operador rest
    console.log(partes)
    console.log(valores)
    return "Outra string"
}
const aluno = "wernd"
const situacao="aprovado"

console.log( tag`${aluno} está ${situacao}`) // vai passar essa template string pra a função tag , delimitando as partes e os valores , os valores vão ser o nome do aluno e a situação , já as partes vão ser aquilo que não faz parte daquilo que foi interpolado

