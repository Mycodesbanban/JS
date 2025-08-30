const mongoose = require("mongoose")
const router = require("express").Router()
const bcrypt = require("bcrypt")
const getUserBytoken = require("../helpers/getUserBytoken")

// middlewares
const verificarToken = require("../helpers/checkToken")

const User = require("../models/user")


router.get("/:id", verificarToken,async(req, res)=>{

   const id = req.params.id

   // verificar se o usuaio existe 

   try{
      const user = await User.findOne({_id:id},{password:0 })
      res.json({error:null,user })

   }catch(err){
      return res.status(400).json({error:"Usuario nao autenticado"})
   }



});


// atualizacao do usuario

router.put("/", verificarToken,async(req, res)=>{

   const token = req.header("auth-token")
   // para o usuario atualizar ele mesmo
   const user = await getUserBytoken(token)
   const UserReqId= req.body.id;
   const password = req.body.password
   const confirmPassword = req.body.confirmPassword

   // Validar se o usuario mudou o id pelo o token

   const userId = user._id.toString();
   if(userId != UserReqId){
      res.status(401).json({error:"Ocorreu um erro no seu codigo unico por favor tente novamente mais tarde "})
   }

   // Criando um Objeto de usuario

   const updateData = {
      name: req.body.name,
      email:req.body.email,
   }
   // checar as senhas e as confirmacoes de senhas 
   if(password != confirmPassword){
        res.status(401).json({error:"senhas invalidas"})
   }else if (password == confirmPassword && password != null) {
      // criar as senhas 

      const salt = await bcrypt.genSalt(12)
      const reqPasswordhash = await bcrypt.hash(password, salt)

      // dados 
      updateData.password = reqPasswordhash

   }

   try{  
      // Retornar o dado atualizado
      const UpdateUser = await User.findOneAndUpdate({_id:userId}, {$set:updateData}, {new:true})
      res.json({error:null , msg:"usuario atualizado com sucesso", data:UpdateUser })


   }catch(err){
      res.status(401).json({error:err})
   }
   
})



module.exports = router

