import multer from "multer";
import multerConfig from "../config/multerConfig";
import Photo from "../models/Photo"
const upload = multer(multerConfig).single("photo")


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
      const photo = await Photo.create({originalname, filename, aluno_id})
     return res.json(photo)

    } catch(e){
      res.status(400).json({
        errors:["a foto nao foi enviada ou encontrada tente novamnete mais tarde/aluno nao existe", e.code]
      })
    }
   })

  }
}

export default new PhotoController()
