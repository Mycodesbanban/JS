
import Aluno from "../models/Aluno"

class AlunoController{
 async index(req, res){
  const alunos = await Aluno.findAll()
    res.json(alunos)
  }

  async create(req , res){
     try{
      const aluno = await Aluno.create(req.body)
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
      const aluno= await Aluno.findByPk(id)

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
      const aluno= await Aluno.findByPk(id)

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
      const aluno= await Aluno.findByPk(id)

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
export default new AlunoController()
