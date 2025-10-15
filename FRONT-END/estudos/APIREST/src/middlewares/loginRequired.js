import jwt from "jsonwebtoken"
import Users from "../models/Users";
export default  async(req , res , next) =>{
  const {authorization} = req.headers;

  if(!authorization){
    return res.status(401).json({
      errors:["Login required"]
    })
  }

  const [  token ] = authorization.split("")

  try{
    const dados = jwt.verify(token , process.env.TOKEN_SECRET)
    const {id , email}= dados
    const user = await Users.findOne({
      where:{
        id:id,
        email:email,
      },

    })
    if(!user){
      return res.status(401).json({
      errors:["usuario invalido"]
    })
    }

    req.userId=id
    req.userEmail = email
  }catch(e){
    return res.status(401).json({
      errors:["token expirado ou invalido"]
    })
  }
}



