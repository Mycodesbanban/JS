// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A 
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
// retornará o valor da aplicação sob o regime de juros compostos.  

function func(capitalInicial , taxa , tempo){
    return capitalInicial + (capitalInicial * taxa * tempo);
}
function func2(capitalInicial , taxa , tempo){
    return capitalInicial * (1+taxa)**tempo
}
console.log(func(100, 10/100, 2))
console.log(func2(100,10/100,2))