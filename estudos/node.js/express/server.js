const express = require("express");
const app = express()

app.get("/" , (req , res)=>{
    res.send("hello <b>word</b> gg game funcionou caralhoooooooooooooooooooo!")
});
app.get("/contato" , (req , res)=>{
    res.send("Obrigado por entrar em contato com a gente")
})
app.listen(3000 , ()=>{
    console.log("'Servidor executando na porta 3000")
}); 


//* req.params:Usado para parâmetros de rota ou seja, dados inseridos diretamente na URL

//* req.query:Usado para query strings na URL (após o ?). Muito comum em filtros, paginações, etc

//* req.body: Usado para acessar o corpo da requisição,
