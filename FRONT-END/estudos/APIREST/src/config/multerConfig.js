import multer from "multer";
import {resolve, extname} from "path"
const aleatorio = () => Math.floor(Math.random() *10000 +10000)


export default {
  fileFilter:(req, file ,callback) =>{
   if(file.mimetype !== "image/png" && file.mimetype !=="image/jpeg"){
    return  callback(new multer.MulterError("escolha arquivos png ou jpeg"))
   }
   return callback(null,true)
  },
  storage:multer.diskStorage({
    destination:(req , file , callback) =>{
      callback(null , resolve(__dirname, "..", "..", "upload", "images"))
    },
    filename:(req, file  ,callback) =>{
      callback(null , `${Date.now()} _${aleatorio}${extname(file.orginalname)}`)
    },

  })
}
