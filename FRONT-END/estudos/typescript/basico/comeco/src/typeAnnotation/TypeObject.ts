const objetoA:{
    chaveA:string;
    // readonly chaveB:string;
    chave?:string;
    [key:string]:unknown
} = {
    chaveA:"valor a"
}

objetoA.chaveB

// Podemos usar readonly pra o valor nunca ser alterado