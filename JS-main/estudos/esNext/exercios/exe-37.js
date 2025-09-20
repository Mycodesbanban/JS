//  Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam como parâmetros um número n (número de termo), a1​ (o primeiro termo) e r​ (a razão) e escreva os n​ termos , bem como a soma dos elementos.
function recebam (a1 , n , r){
    let soma= 0
    let termos=[]
    for ( let i = 0 ; i < n ; i++){
        let termo = a1 + ( i * n)
        termos.push(termo);
        soma +=termo
    }
    console.log("Termos da PA:", termos);
    console.log("Soma dos termos da PA:", soma);
}
function recebe(a1 , n , r){
    let soma = 0 
    let termos = []
    for ( let i = 0 ; i < n ; i++){
        let termo = a1 * Math.pow( r , i)
        termos.push(termo)
        soma += termo
    }
    console.log("Termos da PG:", termos);
    console.log("Soma dos termos da PG:", soma);
}
let n = 5
let a1= 2
let r = 3
recebam(n , a1 , r)
recebe( n , a1 , r)