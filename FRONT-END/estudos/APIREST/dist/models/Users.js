"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);


 class Users extends _sequelize.Model {
  static init(sequelize){
    super.init({
      nome:{
       type: _sequelize2.default.STRING,
       defaultValue:"",
       validate:{
         len:{
          args:[3,255],
          msg:"O campo nome deve ter entre 3 a 255 caracteres"}
       }
      },
       email:{
       type: _sequelize2.default.STRING,
       defaultValue:"",
       unique:{
        msg:"email ja existe"
       },
       validate:{
        isEmail:{msg:"email invalido"}
       }
      },
       password:{
       type: _sequelize2.default.STRING,
       defaultValue:"",

      },
       password_hash:{
       type: _sequelize2.default.VIRTUAL,
       defaultValue:"",
       validate:{
         len:{
          args:[6,25],
          msg:"a senha precisa conter entre 6 ou 25 caractres"}
       }
      },



    } , {
      sequelize,
    })
    this.addHook("beforeSave", async user =>{
      if(user.password){

        user.password_hash = await _bcryptjs2.default.hash(user.password , 8 )
      }
    })
    return this
  }
  passwordIsValid(password){
    return _bcryptjs2.default.compare(password, this.password_hash)
  }
} exports.default = Users;
