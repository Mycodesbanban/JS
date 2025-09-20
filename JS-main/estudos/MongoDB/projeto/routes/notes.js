const Router = require("express").Router

// importando o mongodb

const db = require("../DB/connections")

// Importando objectId  (para criar ids quando for necessarios )

const {ObjectId} = require("mongodb")

const router = Router();

// Detalhes

router.get("/:id",async function (req , res){ //defindindo uma rota dinamica e pegando o id pelo o parametro
    const id = new ObjectId(req.params.id) // transforma o id do parametro em um objectId

    const note = await db.getDb().db().collection("notes").findOne({_id:id})

    res.render("notes/detail", {note})

})

// Routeando outras pages para a nossa aplicacao 

router.get("/", function(req, res){
    res.render("notes/create");
}
)

// forma que a gente tem para inserir as notas no sistema 

router.post("/" ,  (req , res) => {
     const data = req.body // contem os dados do corpo da requisicao
     const title = data.title //captura os titulos
     const description = data.description //captura as descricoes

     db.getDb()
     .db() // seleciona o banco
     .collection("notes") //criando a collection
     .insertOne({title:title , description: description})

     res.redirect(301, "/")


})

// vizualizacao de edicao de nota

router.get("/edit/:id",  async function(req , res){
    const id = new ObjectId(req.params.id); // pega o id do parametro e transforma ele em um id do mongodb

    const note = await db.getDb().db().collection("notes").findOne({_id:id})

    res.render("notes/edit", {note})
})

// Edicao de nota rota 

router.post("/update" , function(req , res){
    const data = req.body
    const id = new ObjectId(data.id)
    const title = data.title
    const description = data.description  

    db.getDb()
    .db()
    .collection("notes")
    .updateOne({_id:id} , {$set:{title: title , description: description}})

    res.redirect("/")

})


// Remover notas 

router.post("/delete/", (req , res) =>{
    const data = req.body //pega todas as informacoes dentro do corpo da requisicao
    const id = new ObjectId (data.id) // transforma em object id 

    db.getDb()
    .db()
    .collection("notes")
    .deleteOne({_id:id})

    res.redirect(301, "/")
})

module.exports = router