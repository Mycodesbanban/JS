// vamos criar um array
var funcs=[]
// vamoo cria um loop com var
for(var i = 0; i <10; i++){
    // agora vamos coloca um push no funcs , é uma função que permite adicionar um ou mais elementos ao final de um array
    funcs.push(function(){
        // colocamos uma função anonima 
        console.log(i)
        //
    })
}
funcs[2]()
funcs[8]
//  O resultado vai ser 10 pois é um bug do java script