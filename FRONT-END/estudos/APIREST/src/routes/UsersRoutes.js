import { Router } from "express";
import UserController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";
const router = new Router()

router.post("/users",loginRequired, UserController.create)

// get

// essas rotas que estao comentadas nao deveria existe

// router.get("/users", UserController.index) // lista usuarios

// router.get("/:id", UserController.show)

router.put("/",  loginRequired,UserController.update)

router.delete("/", loginRequired,UserController.delete)


export default router;



//* em cada controlles pode existir ate 5 metodos

// Index => lista usuario (get)

// Create/Store => criar usuarios (post)

// delete/destroctry => apaga um usuario (delete)

// show => mostra um usuario (get)

// update => atualiza o usuario (patch || put)
