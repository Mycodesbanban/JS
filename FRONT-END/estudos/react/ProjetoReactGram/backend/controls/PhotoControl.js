const Photo = require("../models/Photo")
const User = require("../models/User")
const mongoose = require("mongoose")


const insertPhoto = async(req, res) =>{
    const {title} = req.body
    const image = req.file.filename
   const reqUser = req.user
   const user = await User.findById(reqUser._id)
   const newPhoto = await  Photo.create({
    image,
    title,
    userId: user._id, 
    userName: user.name

   })

   if(!newPhoto){
     res.status(422).json({errors:["Tente novamente mais tarde"]})
     return
   }
   res.status(201).json(newPhoto)
}

const deletePhoto = async(req, res) =>{
    const {id} = req.params
    const reqUser = req.user
    try {
        const photo = await Photo.findById(id)
    
        if(!photo){
            res.status(404).json({errors:["foto nao encontrada "]})
            return 
        }
    
        if(!photo.userId.equals(reqUser._id)){
            res.status(422).json({erros:["Ocorreu um erro, tente novamente mais tarde"]})
            return
        }
        await Photo.findByIdAndDelete(photo._id)
    
        res.status(200).json({id:photo._id, message:"foto excluida com sucesso!"})
    } catch (error) {
        res.status(404).json(error)
    }
}

const getAllPhotos = async(req, res ) =>{
    const photos = await Photo.find({}).sort([["createAt", -1]]).exec()
    return res.status(200).json(photos)
}

const getUserPhoto = async (req, res) =>{
    const {id} = req.params
    const photos = await Photo.find({userId:id}).sort([["createdAt" ,-1]]).exec()

     return res.status(200).json(photos)
}

const getPhotoById = async(req, res) =>{
    const {id} = req.params
    const photos = await Photo.findById(id)
    if(!photos){
            res.status(404).json({errors:["foto nao encontrada "]})
            return 
        }
             return res.status(200).json(photos)

    
}

const UpdatePhoto = async (req, res) =>{
    const {id} = req.params
    const {title} = req.body
    const reqUser = req.user

    const photo = await Photo.findById(id)

    if(!photo){
            res.status(404).json({errors:["foto nao encontrada "]})
            return 
        }
      if(!photo.userId.equals(reqUser._id)){ //vendo se a foto pertence ao usuario
            res.status(422).json({erros:["Ocorreu um erro, tente novamente mais tarde"]})
            return
        }
    if(title){
        photo.title = title
    }
   await photo.save()
   return res.status(200).json({photo, message:"foto atualizada com sucesso"})

}


const LikesPhotos = async(req, res) =>{
    const {id} = req.params
    const photo = await Photo.findById(id)
    const reqUser = req.user
    if(!photo){
            res.status(404).json({errors:["foto nao encontrada "]})
            return 
        }
    if(photo.likes.includes(reqUser._id)){
         res.status(422).json({errors:["voce ja curtiu a foto"]})
         return
    }

    photo.likes.push(reqUser._id)

   await photo.save()
    res.status(200).json({photoId:id, userId:reqUser._id, message:"A foto foi curtida "})
}

const commentPhoto = async(req, res) =>{
    const {id} = req.params
    const {comments} = req.body

    const reqUser = req.user

    const user = await User.findById(reqUser._id)

    const photo = await Photo.findById(id)

    if(!photo){
            res.status(404).json({errors:["foto nao encontrada "]})
            return 
        }

    const userComment = {
        comments,
        userName:user.name,
        userImage: user.profileImage,
        userId:user._id
    }
    photo.comments.push(userComment)
     await photo.save()
    res.status(200).json({comments:userComment, message:"O comentario foi adicionado com sucesso"})

}

const searchPhotos= async(req, res) =>{
    const {q} = req.query

    const photos = await Photo.find({title:new RegExp(q,"i")}).exec()
    res.status(200).json(photos)
}


module.exports = {
    insertPhoto, 
    deletePhoto,
    getAllPhotos,
    getUserPhoto,
    getPhotoById,
    UpdatePhoto,
    LikesPhotos,
    commentPhoto, 
    searchPhotos
}