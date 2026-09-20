const express = require("express")
const router = express.Router()


const {insertPhoto, deletePhoto, getAllPhotos, getUserPhoto, getPhotoById, UpdatePhoto, LikesPhotos, commentPhoto, searchPhotos} = require("../controls/PhotoControl")



const {photoInsertValidation, photoUpdateValidation, commentsValidation} = require("../middlewares/PhotoValidation")
const validate = require("../middlewares/handleValidator")
const authGuard = require("../middlewares/AuthGuard")
const { ImageUpload } = require("../middlewares/imageUpload")


router.post(
    "/",
    authGuard,
    ImageUpload.single("image"),
    photoInsertValidation(),
    validate,
    insertPhoto
)

router.delete("/:id", authGuard, deletePhoto)

router.get("/", authGuard, getAllPhotos)

router.get("/user/:id", authGuard, getUserPhoto)

router.get("/search", authGuard, searchPhotos)

router.get("/:id", authGuard, getPhotoById)

// ROTAS ESPECÍFICAS PRIMEIRO
router.put("/likes/:id", authGuard, LikesPhotos)

router.put(
    "/comments/:id",
    authGuard,
    commentsValidation(),
    validate,
    commentPhoto
)

// ROTA GENÉRICA POR ÚLTIMO
router.put(
    "/:id",
    authGuard,
    photoUpdateValidation(),
    validate,
    UpdatePhoto
)
module.exports = router 