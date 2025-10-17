"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

class TokenController{
 async create(req, res){

  const {email="" , password=""} = req.body

  if(!email || !password ){
    return res.status(401).json({
      errors:['credenciais invalidas']
    })
  }

  const user = await _Users2.default.findOne({where:{email}})
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
  const token = _jsonwebtoken2.default.sign({id, email}, process.env.TOKEN_SECRET,{
    expiresIn: process.env.TOKEN_EXPIRATION,
  })

   return res.json({token})

}
}
exports. default = new TokenController()
// debugger
