"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

class HomeController{
 async index(req, res){
  const dentrodofodase =(fodaci=[]) =>{
    fodaci.push("fodase")
  }
    res.json(dentrodofodase())
  }
}

exports. default = new HomeController()
