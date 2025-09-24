// usando a notção literal mas não confunda com Json 
const obj1= {}
console.log(obj1);

// Object em JS
console.log(typeof Object , typeof new Object()) //criamos um objeto com uma função construtoras 
const obj2= new Object
console.log(obj2)

// Funções construtoras 
function Produto (nome , preco , desc){
    this.nome=nome
    this.getPrecocomDesconto=()=>{
        return preco * (1-desc)
    }


}
const p1 = new Produto("caneta" , 15.99,0.15)
const p2= new Produto ("Notebook", 2999.99 , 0.25)
console.log(p1.getPrecocomDesconto(), p2.getPrecocomDesconto())
// essa foi a terceira forma de criar objeto

// criando objetos com função factory
function criarfuncionario(nome , salario, faltas){
    return{
        nome, 
        salario, 
        faltas, 
        getsalario(){
            return ( salario /30 )*(30-faltas)
        }
    }
}
const f1=criarfuncionario("João", 7899 , 4-1)
const f2= criarfuncionario("Mateus" ,1234 , 10)
console.log(f1.getsalario() , f2.getsalario())

// Object.create
const fila = Object.create(null)
fila.nome="ITAU"
console.log(fila)

// Uma função famosa que retorna Objeto
const fromjson= JSON.parse('{"info":"eu sou um JSON"}')
console.log(fromjson.info)