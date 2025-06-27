// Getters e setters em classes 
const _velocidade = Symbol("velocidade");

class Carro {
    constructor(nome){
     this.nome = nome // atriuindo para uma variavel que pode se acessada dentro do contexto Carrp
     this[_velocidade] = 0;  // chamando a velocidade Symbol

    }
    
    set velocidade (valor){
        if(typeof valor !=="number") return; ; // caso o valor não seja um numero a função acaba
        if(valor>= 100 || valor <= 0) return; // caso o valor for maior ou igual a 100 ou seja menor ou igual a zero a função acaba
        this[_velocidade] = valor // permite que altere a velocidade 
    }

    get velocidade(){ //usamos o get estamos atribuindo uma função velocidade para ser acessada apartir de .
        return this[_velocidade]
    }

    acelerar(){
        if(this[_velocidade] >= 100) return ; // caso a aceleção for maior que 100 a função acaba
        this[_velocidade]++; // quando formos acelerar vai acresentando
    }
    freiar(){
        if(this[_velocidade] <= 0) return; // caso o carro esteja na velocidade 0 a função acaba
        this[_velocidade]-- // quando formos freiar vai reduzindo
    }
}

const c1 = new Carro ("Fuscar") // atribuindo um carro
for(let i =0 ;i <= 200 ; i++){ // fazendo o for para a velocidade
    c1.acelerar()
}

c1.velocidade = 99
console.log(c1.velocidade)




//* Symbol(): usando para criar propriedades únicas para objetos , um Symbol nunca é igual a o outro 