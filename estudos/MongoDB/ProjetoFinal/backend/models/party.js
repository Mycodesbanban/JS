const moongose = require("mongoose")


const PartySchema = new moongose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    PartyDate:{
        type: Date,
        required:true
    },
    photos:{
        type:Array,
        required:true
    },
    privacy:{
        type:Boolean
    },
    UserId:{
        type:moongose.ObjectId
    }
})


const Party = moongose.model("Party", PartySchema) //criando um model chamado Party e usando o schema

module.exports = Party