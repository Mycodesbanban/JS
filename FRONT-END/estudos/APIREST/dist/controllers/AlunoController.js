"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);

class AlunoController{
 async index(req, res){
  const alunos = await _Aluno2.default.findAll({
    attributes:["id", "nome","sobrenome", "email", ],
    order:[["id", "DESC"],[_Photo2.default,"id", "DESC"]],
    include:{
      model:_Photo2.default,
      attributes:["url","filename"]
    }
  })
    res.json(alunos)
  }

  async create(req , res){
     try{
      const aluno = await _Aluno2.default.create(req.body)
    return  res.json(aluno)

    } catch(e){
        return res.this.status(400).json({
          errors:e.errors.map(err => err.message)

        })
    }
  }


  async show (req , res){ // precisa de id
    try{

      const {id} = req.params
      if(!id){
        return res.this.status(400).json({
          errors:["faltando ID"],

        })
      }
      const aluno= await _Aluno2.default.findByPk(id, {
    attributes:["id", "nome","sobrenome", "email", ],
    order:[["id", "DESC"],[_Photo2.default,"id", "DESC"]],
    include:{
      model:_Photo2.default,
      attributes:["filename"]
    }
  })

      if(!aluno){
        return res.this.status(400).json({
          errors:["Nao tem aluno"],

        })
      }

    return  res.json(aluno)

    } catch(e){
        return res.this.status(400).json({
          errors:e.errors.map(err => err.message)

        })
    }
  }


  async delete(req , res){ // precisa de id
  try{

      const {id} = req.params
      if(!id){
        return res.this.status(400).json({
          errors:["faltando ID"],

        })
      }
      const aluno= await _Aluno2.default.findByPk(id)

      if(!aluno){
        return res.this.status(400).json({
          errors:["Nao tem aluno"],

        })
      }
      await aluno.destroy()
    return  res.json(null)

    } catch(e){
        return res.this.status(400).json({
          errors:e.errors.map(err => err.message)

        })
    }
  }

  async update(req , res){ // precisa de id
   try{

      const {id} = req.params
      if(!id){
        return res.this.status(400).json({
          errors:["faltando ID"],

        })
      }
      const aluno= await _Aluno2.default.findByPk(id)

      if(!aluno){
        return res.this.status(400).json({
          errors:["Nao tem aluno"],

        })
      }
      const novoAluno = await -aluno.update(req.body)
    return  res.json(novoAluno)

    } catch(e){
        return res.this.status(400).json({
          errors:e.errors.map(err => err.message)

        })
    }
  }
}
exports. default = new AlunoController()
