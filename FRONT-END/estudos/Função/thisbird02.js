
// A função setInterval em Js é usada para executar uma função ou um trecho de código repetidamente, em um intervalo de tempo especificado, em milissegundos. Essa função é útil para criar animações, atualizações de interface do usuário, contadores, entre outros.

// sintaxe

// let intervalID = setInterval(funcao, intervalo, arg1, arg2, ...);

// funcao: A função que será executada repetidamente.

// intervalo: O tempo em milissegundos entre cada execução da função.

// arg1, arg2, ...: Argumentos opcionais que podem ser passados para a função.

function pessoa(){
    this.idade=0
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }, 1000) 
}

new pessoa 
// setInterval() retorna um identificador de intervalo (um número), que pode ser usado para parar a execução do intervalo usando clearInterval().

// usamos uma função que não recebeu nenhum parametro , e ele recebe um intervalo de 1000 millissegundos/ 1 segundo 

// O resultado foi NaN
// como resolver?

function pessoa2(){
    this.idade2=0
    setInterval(function(){
        this.idade2++
        console.log(this.idade2)
    }.bind(this), 1000) 
}

new pessoa2
// usando a função bind

// podemos fazer assim tambem , vamos definir uma variavel logo bo inicio

function pessoa3(){
    this.idade3=0
    const self= this
    setInterval(function(){
        self.idade3++
        console.log(self.idade3)
    }, 1000) 
}

new pessoa3

// definimos a variavel self para  acessar os atributos do "suposto this"
