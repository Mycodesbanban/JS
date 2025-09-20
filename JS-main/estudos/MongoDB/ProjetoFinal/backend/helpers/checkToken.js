const jwt = require("jsonwebtoken")

// verificar se o token e valido

const checkToken= (req , res , next) =>{
    const token = req.header("auth-token")

    if(!token){
        return res.status(401).json({error:"token nao encontrado"})
    }

    try{
        const verificar = jwt.verify(token, "nossosecret") //verifica se o token e valido junto com o nosso secret
        req.user = verificar
        next() //continuar



    }catch(error){
        res.status(400).json({error:"Ocorreu um erro na na tentativa "})
    }
}

module.exports = checkToken