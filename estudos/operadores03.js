// vamos fazer um exemplo basico usando a estrutura do array , aonde vamos ter um array de uma posição e extrair o valor que está dentro dessa posição
const [a]=[10]
console.log(a)

const[n1 , , n3, , n5 , n6 = 0] = [10 , 7 , 9 , 8 ]
console.log(n1, n3 , n5 ,n6);
// vimos que podemos ignorar elementos como está no exemplo a cima usamos virgulas para separar sendo que não existe nenhum elementos definido no caso é n2 e n4, o n3 não vai ter valor definido por que os valores n2 e n4 ainda estão ali só não estão ali como arrays , então o resultado do n3 é undefined
// um array pode ter outros elementos do tipo array
const[,[, nota]]=[[, 8 , 8] , [ 9 , 6 , 8 ]]
console.log(nota)
// vimos que o primeiro elementos ignorei , o segundo array estamos ignorando o primeiro elementos desse array é estamos pegando o segundo elemento 
