const porta = 3003

const express = require("express")
const app = express()
const bodyParse=require("body-parser");
const importar=require("./bancodedos")

 app.use(bodyParse.urlencoded({extended:true })) //.user é usado para registrar middlewares globais.
//urlencoded() é um middleware do Express que permite processar dados enviados via formulários HTML, ele analisa dados da requisição
 // extended efine como os dados serão interpretados.




app.get("/produtos",(req , res , next)=>{
    console.log("middleware 1...")
    next() // vai passar para o outro middle
})

app.get("/produtos" , ( req , res , next)=>{
    // usamos a função middle 
        res.send(importar.getProdutos())
    // vai converte para o formato Json



}) // get uma forma de requisição para web

app.get("/produtos/:id" , (req , res)=>{
    res.send(importar.getProdutos(req.params.id))
})

app.post('/produtos' , (req , res)=>{
    const produto = importar.salvarproduto({
        nome:req.body.nome,
        preco:req.body.preco
    })
    res.send(produto) //JSON 
    res.status(201).json(produto )

})

app.listen(porta , ()=>{ // chamos uma callback
    console.log(`Servidor rodando na porta ${porta}.`)
}) // listen() tambem é um metodo do express.js que é usado para iniciar um servidor web e escutar requisições em uma determinada porta 

