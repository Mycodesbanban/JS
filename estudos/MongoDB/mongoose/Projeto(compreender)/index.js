const moongose = require("mongoose")

moongose.connect("mongodb://localhost/test", {})

const db= moongose.connection; // pega o objeto da conexao atual

// caso aconteca um erro
db.on("error", console.error.bind(console, "connection error:"));

// Vai tentar uma vez abria a conexao
db.once("open", function(){
    console.log("Estou conectado ao mongoDB")
})


// schemas

const pessoaSchema = new moongose.Schema({  // definindo uma variavel que tem os dados para ser amarzenados e validados no banco
    nome:String,
    idade:Number,
    trabalho: Boolean
})


// criar model

// Cria um model chamado Pessoa que se basea em pessoaSchema
const Pessoa =moongose.model("Pessoa", pessoaSchema)


// cria um novo documento que se basea no model Pessoa
const matheus = new Pessoa ({
    nome:"Matheus",
    idade:12,
    trabalho:false
})

// agora podemos ver os dados pelo o console pela a anotacao ponto
console.log(matheus.nome)

console.log(matheus.idade)

console.log(matheus.trabalho)

// Salvando dados

matheus.save()
.then(() => console.log("documento salvo com sucesso"))
.catch((err)=>{
    console.log(`ocorreu um erro para salvar seu arquivo:${err}`)
})


// Encontrando dados

// Buscando um unico dados com o nome Matheus
Pessoa.findOne({nome:"Matheus"})
.then(pessoa=> console.log(pessoa))
.catch(err => console.log(`Ocorreu um erro: ${err}`))


// Inserindo varios dados 

// primeiro definindo um array onde vai ter varios documents (dados)
const pessoas =[
   {nome:"maycon1", idade:12 , trabalho:true},
   {nome:"maycon2", idade:15 , trabalho:true},
   {nome:"maycon3", idade:17 , trabalho:true},
]

// inserindo no banco de dados
Pessoa.insertMany(pessoas) //colando o array 
.then(res => console.log(`dados enviados com sucesso ${res}`))
.catch(err => console.log(`ocorreu um erro ao enviar seus dados ${err}`))

// Deletando dados 

Pessoa.deleteOne({nome:"Matheus"})
.then(delName => console.log(`O usuario foi deletado`, delName))
.catch(err => console.log(`Nao foi possivel deletar o usuario err:${err}`))

// Atualizando dados

Pessoa.updateOne(
    {nome:"maycon1"},
    {$set:{idade:45}}
)
.then(atual => console.log(`Os dados foram atualizados `, atual))
.catch(err => console.log(`Ocorreu um erro ao atualizar os dados ${err}`))

// Where
Pessoa.where("idade").gte(18).lte(30) // idade entre 18 e 30
      .where("trabalho").equals(true) // trabalho = true
      .then(res => console.log(res))
      .catch(err => console.error(err));