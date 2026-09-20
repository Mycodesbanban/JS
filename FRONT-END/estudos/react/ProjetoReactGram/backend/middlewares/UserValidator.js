const {body} = require("express-validator") // tudo que vem do corpo da requisicap


const useCreateValidation = () =>{
    return [
        body("name").isString().withMessage("O nome e obrigatorio para a criacao de usuarios").isLength({min:3}).withMessage("o nome precisa ter no minimo 3 caracteres."),
        body("email").isString().withMessage("por favor, coloque seu email para a criacao de usuario").isEmail().withMessage("por favor coloque um email valido"),
        body("password").isString().withMessage("por favor coloque sua senha").isLength({min:5}).withMessage("precisa ter 5 caracacteres"),
        body("confirmPassword").isString().withMessage("a confirmacao da senha e obrigatoria").custom((value, {req}) => {
            if(value != req.body.password){
                throw new Error("as senhas nao sao iguais")
            }
            return true;
        })
    ]
};

const loginValidation = () => {
    return [
        body("email").isString().withMessage("o email e obrigatorio").isEmail().withMessage("insira um email correto"),
        body("password").isString().withMessage("insira sua senha")

    ]
}

const userUpdateValidation = () =>{
    return [
        body("name").optional().isLength({min:3}).withMessage("O nome precisa ter no minimo 3 caracteres"),
        body("password").optional().isLength({min:5}).withMessage("a senha precisa ter no minimo 5 caracteres"),


    ]
}
module.exports = {useCreateValidation, loginValidation, userUpdateValidation}
