const porta = 3003

const express = require("express") // chama o module express
const app = express() // passa para o app a função express()
const BancodeDados=require("./bancodedos") // exportar o banco de dados
const bodyParser=require("body-parser") // chama o modulo body-parser

app.use(bodyParser.urlencoded({extended:true})) //.use é usado para registrar middlewares na aplicação
// urlencoded é usado para processar dados de formulários HTML enviados via POST. Ele converte os dados enviados no body da requisição para um objeto 
// extended:Ele define como os dados serão processados:
// true → Permite objetos aninhados e arrays no req.body (usando a biblioteca qs).
// false → Aceita apenas objetos simples no req.body (usando querystring).



app.get('/produtos' , (req , res , next)=>{ // .get é um método express usado para definir rotas HTTP GET
    res.send(BancodeDados.getProdutos()) // .send é um método express usado para enviar uma resposta HTTP ao cliente
})

app.get('/produtos/:id' , (req , res , next)=>{
    res.send(BancodeDados.getProduto(req.params.id)) // está sendo usado para acessar os parâmetros na url do express
})

app.post('/produtos' , (req , res , next)=>{ // no express é usado para lidar com requisições HTTP POST
    const produto = BancodeDados.salvarProduto({
        nome: req.body.nome , //definindo o nome
        preco:req.body.preco // definindo o preço
    })
    res.send(produto) // mostrando a resposta para o usuario
})

app.put('/produtos/:id' , (req , res , next)=>{  //put() no Express é usado para atualizar recursos existentes no servidor. geralmente e ultilizado para substituir um recurso inteiro
    const produto = BancodeDados.salvarProduto({ 
        id: req.params.id,
        nome: req.body.nome , 
        preco:req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id' , (req , res , next)=>{ //.delete() no Express é usado para lidar com requisições HTTP DELETE, ou seja exluir 
    const produto = BancodeDados.excluirProdutos(req.params.id)
   res.send(produto)
})


app.listen(porta , () =>{ // chamamos uma callback
    console.log(`Servidor está executando na porta ${porta}`) // mostra quando o servidor esta rodando
}) //.listen no Express é utilizado para iniciar o servidor e fazer com que ele escute requisições em uma porta específica do seu computador ou servidor