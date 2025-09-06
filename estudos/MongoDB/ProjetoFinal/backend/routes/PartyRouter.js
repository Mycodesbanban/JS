const router = require("express").Router()
const jwt = require("jsonwebtoken")
const multer = require("multer")

const Party = require("../models/party")
const User = require("../models/user")


// definir onde vamos colocar as imagens

const diskStorage = require("../helpers/FileStorage")
const upload = multer({storage:diskStorage})

// middlewares

const verificarToken = require("../helpers/checkToken")

// buscar a funcao que esta dentro da pasta helpers
const getUserBytoken = require("../helpers/getUserBytoken")

// criando a festa
router.post("/" , verificarToken ,upload.fields({name:"photos"}), async (req, res)=>{
    // pegando dados da req
    const title = req.body.title
    const description = req.body.description
    const PartyDate= req.body.PartyDate

    let files = [];


    if(req.files){
        files = req.files.photos
    }

    // Fazendo validacoes
    if(title == "null" || description == "null"|| PartyDate ==="null"){
        return res.status(400).json({error:"prencha os campos"})
    }

    // Verificar usuario

    const token = req.header("auth-token")

    const userByToken = await getUserBytoken(token);

    const userId= userByToken._id.toString()
    try{
    const user = await User.findOne({_id:userId})
// criando um array de fotos com a imagem na pasta 

    let photos = []
    if(files && files.length >0 ){
       files.forEach((photos, index)=>{
        photos[index] = photos.path
       })
    }

    const party = new Party({
        title:title,
        description:description,
        PartyDate:PartyDate,
        photos:photos,
        privacy:req.body.privacy,
        userId:user._id.toString()
    })
    try{
        const newParty = await party.save();
        res.json({error:null, msg:"Evento criado com sucesso", data:newParty

        })
    }catch(err){
         return res.status(400).json({erro:"Ocorreu um erro"})
    }

    } catch(err){
        return res.status(400).json({erro:"prencha os campos"})
    }


});

// resgatando as festas publicas 

router.get("/all", async(req, res)=>{
    try{    
        const Partys=await Party.find({privacy:false}).sort("_id", -1)
        res.json({error:null , parties:Partys})

    }catch(err){
    

        return res.status(400).json({erro:"acesso negado"})
    }
});

// pegando as festas dos usuarios
router.get("/userparties", verificarToken , async(req , res)=>{
    try{
        const token = req.header("auth-token")

        const user = await getUserBytoken(token)

        const userId = user._id.toString()

        const parties = await Party.find({userId:userId})

        res.json({error:null , parties:parties})


    }catch(err){
         return res.status(400).json({erro:"acesso negado"})
    }

})
    // resgatando festa individual

router.get("/userparty/:id", verificarToken , async (req, res)=>{
    try{
        const token = req.header("auth-token")
        const user = await getUserBytoken(token)
        const userId = user._id.toString()
        const partyId = req.params.id

        const party = await Party.findOne({_id:partyId,userId:userId})

        res.json({error:null , party:party})


    }catch(err){
        return res.status(400).json({erro:"acesso negado"})
    }
})

// pega festa de forma nao autenticada (publica ou privada)

router.get("/:id", async(req , res)=>{
    try{
    const id = req.params.id

    const party = await Party.findOne({_id:id})


    // public party

    if(party.privacy === false){
        res.json({error:null, party:party})
    }else {
        // private party
        const token = req.header("auth-token")

        const user = await getUserBytoken(token)

        const userId = user._id.toString

        const userPartyId = party.userId.toString()


        // verifiar se o id do usario bate com o id da festa
        if(userId == userPartyId){
             res.json({error:null , party:party})
        }else{
            return res.status(400).json({erro:"seu bilau e pequeno demais"})
        }

    }

    }catch(err){
         return res.status(400).json({erro:"acesso negado"})
    }
    
})

// deletando eventos

router.delete("/", verificarToken ,async(req , res)=>{
    const token = req.header("auth-token")
    const user = await getUserBytoken(token)
    const partyId = req.body.id
    const userId = user._id.toString()

    try{
        await Party.deleteOne({_id:partyId, userId:userId})
        res.json({error:null, msg:"evento removido com sucesso!"})
    }catch(errr){
        res.status(401).json({error:"acesso negado"})
    }

})

// rota de atualizacao

router.put("/", verificarToken , upload.fields([{name:"photos"}]), async(req , res)=>{
    const title = req.body.title
    const description = req.body.description
    const PartyDate = req.body.PartyDate
    const partyId = req.body.id
    const PartyUserId = req.body.user._id

     let files = [];


    if(req.files){
        files = req.files.photos
    }
      if(title == "null" || description == "null"|| PartyDate ==="null"){
        return res.status(400).json({error:"prencha os campos"})
    }

    // verificar usuario pelo o token

    const token = req.header("auth-token")
    const user = await getUserBytoken(token)
    const userId = user._id.toString()

    if(userId != PartyUserId ){
         return res.status(400).json({error:"acesso negado"})
    }

    // construir o objeto da festa
    const party = {
        id:partyId,
        title:title,
        description:description,
        PartyDate:PartyDate,
        privacy:req.body.privacy,
        userId:userId
    }
     let photos = []
    if(files && files.length >0 ){
       files.forEach((photos, index)=>{
        photos[index] = photos.path
       })
       party.photos = photos
    }
    try{
        // retornando a atualizacao data
        const UpdadeParty = await Party.findOneAndUpdate({_id:partyId ,userId:userId } ,{$set:party} , {new:true})

        res.json({error:null , msg:"evento atualizado com sucesso" , data:UpdadeParty})

    }catch(err){
         return res.status(400).json({err})
    }



})





module.exports = router 