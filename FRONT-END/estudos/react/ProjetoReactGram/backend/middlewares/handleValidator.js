const {validationResult} = require("express-validator")

const validate = (req, res, next) => {
    const errors = validationResult(req)

    if(errors.isEmpty()){
      return  next()
    }
    
    const extractedErros = []

    errors.array().map((e) => extractedErros.push(e.msg))


    return res.status(422).json({
      errors:extractedErros

    })
}

module.exports = validate