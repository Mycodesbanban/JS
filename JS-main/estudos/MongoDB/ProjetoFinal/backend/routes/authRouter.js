const router = require("express").Router()
const bcrypt= require("bcrypt")
const jwt = require("jsonwebtoken")

const User = require("../models/user")

// registro e usuarios 

router.post("/register", async (req , res)=>{

    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword

    // checar campos que sao required
    if(name == null || email == null || password==null || confirmPassword == null){
        return res.status(400).json({error:"Por favor, insirar seus dados corretamento do cadrastro"})
    }
    // Checar as pawword match corretas
    if(password != confirmPassword){
        return res.status(400).json({error:"Senhas nao estao iguais"})
    }

    // checar se ja existe esse user
    const EmailExists = await User.findOne({email:email})

    if(EmailExists){
        return res.status(400).json({error:"O e-mail informado ja esta em uso"})
    }

    // create password
    const salt = await bcrypt.genSalt(12)
    const reqPasswordhash= await bcrypt.hash(password , salt)

    console.log(reqPasswordhash)


    const user = new User({
        name:name,
        email:email,
        password:reqPasswordhash
    });
    try{
        const newUser =  await user.save()

        // Criando o token
        const token = jwt.sign(
            // transmitir instrucoes ou comando a um dispositivo remoto

            {
                name:newUser.name,
                id:newUser._id
            },
            "nossosecret"
        );
    

        // Retorna um token 

        res.json({error:null,msg:"Voce realizou o cadrasto com sucesso", token:token, userid:newUser._id})



    } catch(err){
        res.status(400).json({error})
    }
})


// Login

router.post("/login",async (req , res)=>{
    const email = req.body.email
    const password= req.body.password

    // checar se o usuario existe
    const user = await User.findOne({email:email})

    if(!user){
      return res.status(400).json({error:"esse usuario nao existe"})
    }


    // checar as senhas de usuarios 
     const checkPassword = await bcrypt.compare(password,user.password )

      if(!checkPassword){
      return res.status(400).json({error:"senha de usuario errado tente novamente"})
    }

      const token = jwt.sign(
            // transmitir instrucoes ou comando a um dispositivo remoto

            {
                name:user.name,
                id:user._id
            },
            "nossosecret"
        );
    

        // Retorna um token 

        res.json({error:null,msg:"Voce esta autenticado", token:token, userid:user._id})
        
})

module.exports = router