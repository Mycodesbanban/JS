
import dotenv from "dotenv"
dotenv.config()
import express from "express"
import "./src/database"
import homeRouters from "./src/routes/homeRouters"
import UsersRoutes from "./src/routes/UsersRoutes"
import tokenRoutes from "./src/routes/tokenRoutes"
import alunoRoutes from "./src/routes/alunoRoutes"
import photoRoutes from "./src/routes/photoRoutes"

class App {
  constructor(){
    this.app = express()
    this.middlewares()
    this.routes()
  }
  middlewares(){
    this.app.use(express.urlencoded({extended:true}))
    this.app.use(express.json())
  }
  routes(){
    this.app.use("/",homeRouters )
    this.app.use("/users/",UsersRoutes )
    this.app.use("/tokens/", tokenRoutes)
    this.app.use("/alunos/", alunoRoutes)
    this.app.use("/upload/", photoRoutes)
  }
}

export default new App().app









