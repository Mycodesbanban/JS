const funcs=[]
for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[8]()
// percebemos que quando ultilizamos o let não aconteceu que nem o var que deu um bug e virou 10 , não ele mostrou os resultado 2 é 8
