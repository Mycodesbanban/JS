"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);

class UsersController{
 async create(req, res){
  try{
    const {id , nome , email} = novoUsers
    const novoUsers = await _Users2.default.create(req.body)
     return res.json(id , nome , email)

  } catch(e){
   return res.status(400).json({
    errors:e.errors.map(err => err.message)

  }
  )
  }

  }
  // index
  async index (req, res){
    try{
      const users = await _Users2.default.findAll({attributes:["id", "email", "nome"]})
      return res.json(users)
    }catch(e){
      return res.json(null,e)
    }
  }

  // show
    async show (req, res){
    try{
      const {id , nome , email} = user

      const user = await _Users2.default.findByPk(req.params.id) // mostra a primeira chave
      return res.json(id , nome , email)
    }catch(e){
      return res.json(null, e)
    }
  }


  // update

   async update (req, res){
    try{
      const user = await _Users2.default.findByPk(req.userId) // mostra a primeira chave
      const novosDados= await user.update(req.body)
      const {id, nome , email} = novosDados
      return res.json(id , nome , email )
    }catch(e){
       return res.status(400).json({
    errors:e.errors.map(err => err.message)})

    }
  }



  // delete
  async delete (req, res){
    try{

      const user = await _Users2.default.findByPk(req.userId) // mostra a primeira chave
     await user.destroy()
      return res.json(null)
    }catch(e){
       return res.status(400).json({
    errors:e.errors.map(err => err.message)})

    }
  }
}

exports. default = new UsersController()
