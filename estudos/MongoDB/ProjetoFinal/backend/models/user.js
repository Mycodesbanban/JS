const moongose = require("mongoose")

const userSchema = new moongose.Schema({
    name:{
        type: String
    },
    email:{
        type: String,
        required: true

    },
    password:{
        type:String,
        required:true
    }
})

const User = moongose.model("User", userSchema);

// agora podemos usar o modelo do usuario em algum local da nossa aplicacao
module.exports= User