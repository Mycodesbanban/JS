const User = require("../models/User.js")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
// const mongoose = require("mongoose")

const jwtPass = process.env.JWT_PASS

const generationToken = (id) => {
    return jwt.sign({id}, jwtPass, {
        expiresIn:"7d"
    })
};


const register = async(req, res) =>{
        const {name, email, password} = req.body

        const user = await User.findOne({email})
        if(user){
            res.status(422).json({erros:["esse email ja e cadrastrado"]})
            return
        }
        const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt)
        
        const newUser = await User.create({name, email, password: passwordHash})

        
        // token
        if(!newUser){
            res.status(422).json({errors:["falha ao criar usario, tente novamente mais tarde "]})
            return
        }

        res.status(201).json({
            _id:newUser._id,
            token : generationToken(newUser._id),
        })
    
}
const login = async(req, res) =>{
   const {email, password} = req.body
    const user = await User.findOne({email})
    if(!user){
        res.status(404).json({errors:["a senha ou email estao incorretos."]})
        return
    }
   const checkPassword = await bcrypt.compare(
    password,
    user.password
)

if (!checkPassword) {
    return res.status(422).json({
        errors: ["Senha inválida"]
    })
}

        res.status(201).json({
            _id:user._id,
            profileImage:user.profileImage,
            token : generationToken(user._id),
        })
    
    
}

const getCurrentUser = async(req, res ) =>{
    const user = req.user 
    res.status(200).json(user)
}
const update = async (req, res ) =>{
    const {name, password, bio} = req.body
    let profileImage = null
    if(req.file) {
        profileImage = req.file.filename

    }
    const reqUser = req.user
    const user = await User.findById(reqUser._id).select("-password") // procura o usuario mas o tranforma em um object id nao no mongoose id
    if(name){
        user.name = name 
    }
    if(password){
       const salt = await bcrypt.genSalt()
        const passwordHash = await bcrypt.hash(password, salt)
        user.password = passwordHash
    }
    if(profileImage) {
        user.profileImage = profileImage
    }
    if(bio){
        user.bio = bio
    }

    await user.save()

    res.status(200).json(user)
}

const getUserById = async(req, res) => {
        const {id} = req.params
        const user = await User.findById(id).select("-password")
        if(!user) {
            res.status(404).json({erros:["Usuario nao encontrado"]})
            return 
        }
        res.status(200).json(user)
}

module.exports = {
    register, 
    login,
    getCurrentUser, 
    update,
    getUserById
}