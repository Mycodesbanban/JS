import {resolve} from "path"
import dotenv from "dotenv"
dotenv.config()
import express from "express"
import "./database"
import homeRouters from "./routes/homeRouters"
import UsersRoutes from "./routes/UsersRoutes"
import tokenRoutes from "./routes/tokenRoutes"
import alunoRoutes from "./routes/alunoRoutes"
import photoRoutes from "./routes/photoRoutes"

class App {
  constructor(){
    this.app = express()
    this.middlewares()
    this.routes()
  }
  middlewares(){
    this.app.use(express.urlencoded({extended:true}))
    this.app.use(express.json())
    this.app.use("/images/",express.static(resolve(__dirname,"..","upload","images" )))
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









