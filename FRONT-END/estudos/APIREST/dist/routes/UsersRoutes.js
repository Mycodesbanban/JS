"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);
const router = new (0, _express.Router)()

router.post("/users",_loginRequired2.default, _UserController2.default.create)

// get

// essas rotas que estao comentadas nao deveria existe

// router.get("/users", UserController.index) // lista usuarios

// router.get("/:id", UserController.show)

router.put("/",  _loginRequired2.default,_UserController2.default.update)

router.delete("/", _loginRequired2.default,_UserController2.default.delete)


exports. default = router;



//* em cada controlles pode existir ate 5 metodos

// Index => lista usuario (get)

// Create/Store => criar usuarios (post)

// delete/destroctry => apaga um usuario (delete)

// show => mostra um usuario (get)

// update => atualiza o usuario (patch || put)
