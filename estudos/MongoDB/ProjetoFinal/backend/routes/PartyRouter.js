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
router.post("/" , verificarToken ,upload.fields([{name:"photos"}]), async (req, res)=>{
    try {
        console.log('=== INÍCIO DO UPLOAD ===');
        console.log('Body recebido:', req.body);
        console.log('Files recebidos:', req.files);

        // Pegando dados da requisição
        const title = req.body.title;
        const description = req.body.description;
        const PartyDate = req.body.party_date;
        const privacy = req.body.privacy === 'true'; // Converter string para boolean

        console.log('Dados processados:', { title, description, PartyDate, privacy });

        // Validações básicas
        if (!title || title === "null" || title.trim() === "") {
            return res.status(400).json({error: "Título é obrigatório"});
        }
        
        if (!description || description === "null" || description.trim() === "") {
            return res.status(400).json({error: "Descrição é obrigatória"});
        }
        
        if (!PartyDate || PartyDate === "null") {
            return res.status(400).json({error: "Data da festa é obrigatória"});
        }

        // Verificar usuário
        const token = req.header("auth-token");
        if (!token) {
            return res.status(401).json({error: "Token não fornecido"});
        }

        const userByToken = await getUserBytoken(token);
        if (!userByToken) {
            return res.status(401).json({error: "Usuário não encontrado"});
        }

        const userId = userByToken._id.toString();
        console.log('UserId:', userId);

        // Processar arquivos de imagem
        let photos = [];
        if (req.files && req.files.photos) {
            const files = req.files.photos;
            console.log('Processando arquivos:', files);
            
            // Se for apenas um arquivo, files não será um array
            const fileArray = Array.isArray(files) ? files : [files];
            
            fileArray.forEach((file, index) => {
                console.log(`Arquivo ${index}:`, file.filename, file.path);
                photos.push(file.path);
            });
        }

        console.log('Photos array final:', photos);

        // Criar objeto da festa
        const partyData = {
            title: title.trim(),
            description: description.trim(),
            PartyDate: new Date(PartyDate),
            photos: photos,
            privacy: privacy,
            UserId: userId
        };

        console.log('Dados da festa a serem salvos:', partyData);

        // Criar e salvar a festa
        const party = new Party(partyData);
        const savedParty = await party.save();

        console.log('Festa salva com sucesso:', savedParty);

        res.status(201).json({
            error: null,
            msg: "Evento criado com sucesso",
            data: savedParty
        });

    } catch (error) {
        console.error('Erro no upload da festa:', error);
        console.error('Stack trace:', error.stack);
        
        res.status(500).json({
            error: "Erro interno do servidor: " + error.message
        });
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

        const parties = await Party.find({UserId:userId})

        res.json({error:null , parties:parties})


    }catch(err){
         return res.status(400).json({erro:"acesso negado"})
    }

})
    // resgatando festa individual

router.get("/userparty/:id", verificarToken, async (req, res) => {
    try {
        console.log('=== BUSCAR FESTA INDIVIDUAL ===');
        const token = req.header("auth-token");
        const user = await getUserBytoken(token);
        const userId = user._id.toString();
        const partyId = req.params.id;

        console.log('Buscando festa:', { partyId, userId });

        const party = await Party.findOne({ _id: partyId, UserId: userId });
        
        if (!party) {
            return res.status(404).json({ erro: "Festa não encontrada" });
        }

        console.log('Festa encontrada:', {
            id: party._id,
            title: party.title,
            photos: party.photos,
            photosLength: party.photos ? party.photos.length : 0
        });

        res.json({ error: null, party: party });

    } catch (err) {
        console.error('Erro ao buscar festa:', err);
        return res.status(400).json({ erro: "Acesso negado: " + err.message });
    }
});
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
        await Party.deleteOne({_id:partyId, UserId:userId})
        res.json({error:null, msg:"evento removido com sucesso!"})
    }catch(errr){
        res.status(401).json({error:"acesso negado"})
    }

})

// rota de atualizacao

router.put("/", verificarToken , upload.fields([{name:"photos"}]), async(req , res)=>{
    const title = req.body.title
    const description = req.body.description
    const PartyDate = req.body.party_date
    const partyId = req.body.id
    const PartyUserId = req.body.userId

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
        UserId:userId
    }
    let photos = []
    if(files && files.length > 0 ){
    files.forEach((photo, index) => {
        photos[index] = photo.path  // CORRETO: usar photos[index] ao invés de photos
    })
    party.photos = photos
    }
    try{
        // retornando a atualizacao data
        const UpdadeParty = await Party.findOneAndUpdate({_id:partyId ,UserId:userId } ,{$set:party} , {new:true})

        res.json({error:null , msg:"evento atualizado com sucesso" , data:UpdadeParty})

    }catch(err){
         return res.status(400).json({err})
    }



})





module.exports = router 