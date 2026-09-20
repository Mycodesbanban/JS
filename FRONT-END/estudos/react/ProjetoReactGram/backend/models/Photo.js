const mongoose = require("mongoose")
const {Schema} =  mongoose

const photoschema = new Schema({
    image:String,
    title:String,
    likes:Array,
    comments:Array,
    userId: mongoose.ObjectId,
    userName: String
}, {
    timestamps:true
})

const Photo = mongoose.model("Photo", photoschema)


module.exports = Photo