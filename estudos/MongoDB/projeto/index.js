// configuracoes do localhost

const express = require("express")
const expressHandleBars = require("express-handlebars")
const bodypaser = require("body-parser");

const app = express();

const port = 3030

// template engine

app.engine("handlebars", expressHandleBars()) //minha renderizacao vai usar handlebars
app.set("view engine","handlebars")
app.use(express.static("public"))

// Rotas 

app.get("/" , (req , res)=>{
   res.render("home")
}) // vai ser acessada aparti do metodo get

app.listen(port, ()=> {
    console.log(`projeto rodando na porta ${port}`)
})
