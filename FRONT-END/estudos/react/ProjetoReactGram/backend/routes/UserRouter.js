const express = require("express")
const router = express.Router()
const {register, login, getCurrentUser, update, getUserById} = require("../controls/UserControl")

const validate = require("../middlewares/handleValidator")
const {useCreateValidation, loginValidation, userUpdateValidation} = require("../middlewares/UserValidator")
const authGuard = require("../middlewares/AuthGuard")
const { ImageUpload } = require("../middlewares/imageUpload")

router.post("/register",useCreateValidation(), validate,register )
router.post("/login",loginValidation(), validate, login )
router.get("/profile", authGuard,getCurrentUser)
router.put("/", authGuard, userUpdateValidation(), validate,ImageUpload.single("profileImage"), update)
router.get("/:id", getUserById )
module.exports = router