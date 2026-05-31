let x;
if(typeof x === "undefined") x = 20

console.log(x*20)


export function createPerson(fristName:string, lastName?:string): //abertura da funcao
{fristName:string, lastName?:string 
    //typeAnnotation
} {
    return{
        fristName,
        lastName
    } // corpo da funcao
}   

console.log(createPerson("nat"))


export function squardeOf (x:any) {
    if(typeof x === "number") return x* x 
    return null // caso nao seja um valor de number vai retornar null
}


const squardeOfTwo = squardeOf(2) 
const squardeOfTwoString = squardeOf("2")


console.log(squardeOfTwo)
console.log(squardeOfTwoString)