// revisão 01

// let e const

{  // bloco de codigo

    var a = 2 
    let b = 3
    console.log(b) // não conseguimos acessar uma variavel fora do escopo de bloco onde foi definida com let 
}
console.log(a) // conseguimos acessar uma variavel fora do escopo de bloco com o var 

// Templete String

const produto = "Ipad"

console.log(`${produto} é caro para o carai`)

// Destructuring

const [l , e , ...tras]="Cod3r"
console.log(l , e , tras); // l = C , e=O , ...tras= 'd','3','r'

const [ x ,, y]= [ 1 , 2, 3]
console.log(x , y)

const {idade , nome }= {nome:"Ana" , idade:90}
console.log(idade , nome) // 90 , Ana 
