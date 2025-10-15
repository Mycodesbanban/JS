
import Aluno from "../models/Aluno"

class HomeController{
 async index(req, res){
  const dentrodofodase =(fodaci=[]) =>{
    fodaci.push("fodase")
  }
    res.json(dentrodofodase())
  }
}

export default new HomeController()
