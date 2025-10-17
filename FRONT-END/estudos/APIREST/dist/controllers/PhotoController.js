"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);
var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);
const upload = _multer2.default.call(void 0, _multerConfig2.default).single("photo")


class PhotoController{
   store(req, res){
   return upload(req , res , async(err) =>{
    if(err){
      return res.status(400).json({
        errors:[err.code]
      })
    }
    try{
      const {originalname, filename} = req.file
      const {aluno_id} = req.body
      const photo = await _Photo2.default.create({originalname, filename, aluno_id})
     return res.json(photo)

    } catch(e){
      res.status(400).json({
        errors:["a foto nao foi enviada ou encontrada tente novamnete mais tarde/aluno nao existe", e.code]
      })
    }
   })

  }
}

exports. default = new PhotoController()
