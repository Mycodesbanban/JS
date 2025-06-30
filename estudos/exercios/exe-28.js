// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares
function paresimpares(ventornumero){
    let par=0
    let impar= 0
    for (let i=0 ; i < ventornumero.length ; i++){
        if (ventornumero[i] % 2==0){
            par++
        }
        else{
            impar++
        }
        
    }
    console.log(`Numeros ${par} par é numeros ${impar}`)
}
let ventor=[ 9 , 9 , 3, 2 ,5, 4 , 6, 7, 8, ,3 ,2 ,4,5, 6,6,9]
paresimpares(ventor)