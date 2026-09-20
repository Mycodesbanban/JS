const {body} = require("express-validator")

const photoInsertValidation = () =>{
    return [
        body("title").not().equals("undefined").withMessage("O titulo da imagem e obrigatorio").isString().withMessage("O titulo da imagem e obrigatorio").isLength({min:3}).withMessage("o titulo precisa ter no minimo 3 caracteres"),
        body("image").custom((v, {req} )=>{
            if(!req.file){
                throw new Error("A imagem e obrigatoria")
            }
            return true 
        })

        
    ]
}
const photoUpdateValidation = () =>{
    return[
        body("title").optional().isString().withMessage("O titulo e obrigatorio").isLength({min:3}).withMessage("o titulo precisa ter 3 caracteres.")
    ]
}

const commentsValidation = () =>{
    return[
        body("comments").isString().withMessage("O comentario e obrigatorio"),
    ]
}

module.exports = {photoInsertValidation, photoUpdateValidation, commentsValidation}

