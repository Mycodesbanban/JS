const jwt = require("jsonwebtoken")
const User = require("../models/user")

// funcao

const getUserBytoken= async (token) =>{
    if(!token){
        return res.status(401).json({error:"Erro ao carregar seu token"})
    }

    // encontrar usuarios
    const decoded = jwt.verify(token,"nossosecret")

    // pegando usuario

    const userId = decoded.id
    
    
    const user = await User.findOne({_id:userId})

    return user
}   

module.exports = getUserBytoken