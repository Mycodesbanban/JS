
import dotenv from "dotenv"
dotenv.config()
import express from "express"
import "./src/database"
import homeRouters from "./src/routes/homeRouters"

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
  }
}

export default new App().app









