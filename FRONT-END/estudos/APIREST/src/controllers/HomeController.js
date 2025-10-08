
import Aluno from "../models/Aluno"

class HomeController{
 async index(req, res){
  const novoAluno = await Aluno.create({
    nome:"Luiz",
    sobrenome:"adolf",
    email:"luiz@gmai.com",
    idade:1233
  })
    res.json(novoAluno)
  }
}

export default new HomeController()
