"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);


 class Aluno extends _sequelize.Model {
  static init(sequelize){
    super.init({
      nome:{
        type:_sequelize2.default.STRING,
        defaultValue:"",
        validate:{
          len:{
            args:[3, 255],
            msg:"Nome precisa ter entre 3 a 255 caracteres"
          }
        }
      },
      sobrenome:{
        type:_sequelize2.default.STRING,
        defaultValue:"",
        validate:{
          len:{
            args:[3, 25],
            msg:"O sobrenome precisa ter entre 3 a 25 caracteres"
          }
        }
      },
      email: {
        type:_sequelize2.default.STRING,
        defaultValue:"",
        validate:{
          isEmail:{
            msg:"E-mail invalid"
          }
        }
      },
      idade:{
        type:_sequelize2.default.INTEGER,
        defaultValue:"",
        validate:{
        isInt:{
            msg:"por favor use numeros inteiros"
          }
        }
      }
    } , {
      sequelize,
    })
    return this
  }

  static associate(models){
    this.hasMany(models.Photo,{foreignKey:"aluno_id"})
  }
} exports.default = Aluno;
