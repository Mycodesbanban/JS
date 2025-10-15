
import Users from "../models/Users"
import jsonwebtoken from "jsonwebtoken"

class TokenController{
 async create(req, res){

  const {email="" , password=""} = req.body

  if(!email || !password ){
    return res.status(401).json({
      errors:['credenciais invalidas']
    })
  }

  const user = await Users.findOne({where:{email}})
    if(!user){
    return res.status(401).json({
      errors:['Usuario nao existe']
    })
  }

  if(!(await user.passwordIsValid(password))){
    return res.status(401).json({
      errors:['senha invalida']
    })
  }

  const {id} = user
  const token = jsonwebtoken.sign({id, email}, process.env.TOKEN_SECRET,{
    expiresIn: process.env.TOKEN_EXPIRATION,
  })

   return res.json({token})

}
}
export default new TokenController()
// debugger
