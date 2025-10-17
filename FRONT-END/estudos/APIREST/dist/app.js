"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _path = require('path');
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
_dotenv2.default.config()
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
require('./database');
var _homeRouters = require('./routes/homeRouters'); var _homeRouters2 = _interopRequireDefault(_homeRouters);
var _UsersRoutes = require('./routes/UsersRoutes'); var _UsersRoutes2 = _interopRequireDefault(_UsersRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _alunoRoutes = require('./routes/alunoRoutes'); var _alunoRoutes2 = _interopRequireDefault(_alunoRoutes);
var _photoRoutes = require('./routes/photoRoutes'); var _photoRoutes2 = _interopRequireDefault(_photoRoutes);

class App {
  constructor(){
    this.app = _express2.default.call(void 0, )
    this.middlewares()
    this.routes()
  }
  middlewares(){
    this.app.use(_express2.default.urlencoded({extended:true}))
    this.app.use(_express2.default.json())
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname,"upload" )))
  }
  routes(){
    this.app.use("/",_homeRouters2.default )
    this.app.use("/users/",_UsersRoutes2.default )
    this.app.use("/tokens/", _tokenRoutes2.default)
    this.app.use("/alunos/", _alunoRoutes2.default)
    this.app.use("/upload/", _photoRoutes2.default)
  }
}

exports. default = new App().app









