// Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o 
// primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. 
// Faça a troca sem utilizar uma variável auxiliar.

function recebe ( vetorA , vetorB){
    if( vetorA.length !== vetorB.length){
        throw new Error ("Os vetores tem que ter o mesmo tamanho")
    }
    for( let i = 0 ; i < vetorA.length ; i++){
        [vetorA[i] , vetorB[i]]= [ vetorB[i] , vetorA[i]]

    }
    console.log("Vector A apos a troca" , vetorA)
    console.log("Vector B apos a troca" , vetorB)
}
let vetorA= [1 , 2, 3, 4]
let vetorB= [5 , 6, 7, 8]
console.log("O vector A original:" , vetorA)

console.log("O vector B original:" , vetorB)

recebe(vetorA , vetorB)