// vamos criar varios blocos de codigo
{
    {
        {
            {var sera='Será????' }
        }
    }
};
console.log(sera);
// colocamos varios blocos de codigo mas não vão fazer tanta diferença

// podemos executar fora de um bloco de codigo com o var

// agora vamos cria uma função
function teste(){
    var local = 123
    console.log(local);

}
teste();
// quando colocamos uma variavel dentro da função ela apenas ficará visivel , então se colocamos um console.log fora do bloco da função vai dar erro 

// podemos cria uam variavel var global usando a tag windows