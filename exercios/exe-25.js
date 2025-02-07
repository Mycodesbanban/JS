// Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do 
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do 
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e 
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
function media (aluno , nota1 , nota2 , nota3){
    notas=[ nota1 , nota2 , nota3]
    notas.sort((a , b) => a < b ? 1 :-1)
    let mediaFinal= ( notas[0]*4 + notas[1] * 3 + notas[2]*3) /10
    console.log(`codigo do aluno ${aluno} Notas ${notas[0]} , ${notas[1]},  ${notas[2]}. ${mediaFinal < 5 ?  "Reprovado" : "Aprovado"}`)
    
}
media(1234 , 10 , 4 ,5 )