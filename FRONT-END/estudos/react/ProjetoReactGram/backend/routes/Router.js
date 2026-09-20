const express = require("express")
const router = express.Router()
// router.get("/", (req, res ) =>{
//     res.send("enviada")
// })
router.use("/api/users", require("./UserRouter"))
router.use("/api/photos", require("./PhotoRoutes"))

module.exports = router 