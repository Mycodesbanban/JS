// Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso 
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras
function receber (string1 , string2){
    const set1=new Set (string1.toLowerCase());
    const set2 = new Set ( string2.toLowerCase());
   
        if ( set1.size != set2.size){
            return false 
        } for ( let char of set1){
            if(!set2.has(char)){
                return false
            }
        }  
        return true;
}
console.log(receber("ABVJ" , "ABVJ"))
console.log(receber("ACVD" , "ABDYv"))