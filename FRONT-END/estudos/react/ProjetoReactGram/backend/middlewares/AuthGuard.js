const User = require("../models/User")
const jwt = require("jsonwebtoken")


const jwtPass = process.env.JWT_PASS


const authGuard = async(req, res, next) => {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1] // aqui nos pega o token pegando a segunda parte 

    if(!token) return res.status(401).json({errors:["acesso negado."]})
    
    try {
        const verified = jwt.verify(token, jwtPass)
        req.user = await User.findById(verified.id).select("-password") // tirando a senha do retorno do usuario
        next()
    } catch (e) {
        res.status(401).json({errors:["Token invalido"]})
    }

}


module.exports = authGuard