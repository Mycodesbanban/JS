const multer = require("multer")
const path = require("path")


const imageStore = multer.diskStorage({
    destination:function(req, file, cb){
        let folder = ""
        if(req.baseUrl.includes("users")){
            folder = "users"
        } else if(req.baseUrl.includes("photos")) {
            folder = "photos"
        }

        cb(null,`uploads/${folder}`) // destino da imagem 
    },
    filename:(req, file, cb) =>{
        cb(null, Date.now() + path.extname(file.originalname))
    }



})


const ImageUpload = multer({
    storage:imageStore,
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(png|jpg)$/)){
            return cb( new Error("Por favor envie somente jpg ou png "))
        }
        cb(undefined, true)
    }
})

module.exports = {ImageUpload}