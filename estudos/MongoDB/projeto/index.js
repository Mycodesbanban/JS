// configuracoes do localhost

const express = require("express")
const expressHandleBars = require("express-handlebars")
const bodypaser = require("body-parser");

const app = express();

const port = 3030

// Banco de dados

const Db = require("./DB/connections") // chamamos o arquivos


// template engine

app.engine("handlebars", expressHandleBars()) //minha renderizacao vai usar handlebars
app.set("view engine","handlebars")
app.use(express.static("public"))
app.use(bodypaser.urlencoded({extended:true})) // ele ler os dados no formato urlencoded e transforma em um objeto js

// servir arquivos estaticos 

// Importacao de rotas 

const notesRoutes = require("./routes/notes") // importacao das rotas 

// Rotas 

app.get("/" , (req , res)=>{
    (async () =>{
        const notes = await Db.getDb().db().collection("notes").find({}).toArray()
        res.render("home" , {notes});
    })()

   
}) // vai ser acessada aparti do metodo get

app.use("/notes" , notesRoutes) // estamos informado que vai ultilizar o /notes como o notesRout'

// inicar servidor

Db.initDb((erro , db ) => {
    if(erro){
        console.log(erro)
    }else{
        console.log("O banco connectou com sucesso")
        app.listen(port, () => {
            console.log(`Projeto rodando na porta ${port}`)
        })
    }
})
