"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);
exports. default =  async(req , res , next) =>{
  const {authorization} = req.headers;

  if(!authorization){
    return res.status(401).json({
      errors:["Login required"]
    })
  }

  const [  token ] = authorization.split("")

  try{
    const dados = _jsonwebtoken2.default.verify(token , process.env.TOKEN_SECRET)
    const {id , email}= dados
    const user = await _Users2.default.findOne({
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



