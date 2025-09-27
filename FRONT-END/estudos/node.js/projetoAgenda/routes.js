const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require("./src/controllers/loginController")


//* Rotas da home
route.get('/', homeController.index);


//* Rotas de login
route.get("/login/index", loginController.index )

//*Rotas de usuario cadrastro e login
route.post("/login/index", loginController.index )

route.post("/login/login", loginController.login )

route.post("/login/register", loginController.register)

route.get("/login/logout", loginController.logout)

module.exports = route;
