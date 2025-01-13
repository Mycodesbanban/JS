// notação ponto é acessa membros de uma função , membros de um objeto a partir da inovação do ponto
console.log(Math.ceil(6.1));
// como vimos math e um objeto , o math.ceil retorna o menor numero inteiro maior ou igual o valor dado. exemplo 
console.log(Math.ceil(11.123));
// vai retorna 12
const obj1 = {};
obj1.nome='Bola';
console.log(obj1.nome);
// agora vamos criar uma função

function Obj (nome){
    this.nome=nome;
    this.exec= function(){
        console.log('Exec....')
        // this é uma palavra-chave que se refere ao objeto em um determinado contexto ou escopo. É usado para acessar e manipular propriedades e métodos de um objeto
    }
}
const obj2= new Obj('Cadeira');
const obj3= new Obj('Mesa');
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
// então percebemos que precisamos usar anotação ponto para quase tudo
