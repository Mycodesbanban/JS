import Sequelize, {Model} from "sequelize"


export default class Aluno extends Model {
  static init(sequelize){
    super.init({
      nome:{
        type:Sequelize.STRING,
        defaultValue:"",
        validate:{
          len:{
            args:[3, 255],
            msg:"Nome precisa ter entre 3 a 255 caracteres"
          }
        }
      },
      sobrenome:{
        type:Sequelize.STRING,
        defaultValue:"",
        validate:{
          len:{
            args:[3, 25],
            msg:"O sobrenome precisa ter entre 3 a 25 caracteres"
          }
        }
      },
      email: {
        type:Sequelize.STRING,
        defaultValue:"",
        validate:{
          isEmail:{
            msg:"E-mail invalid"
          }
        }
      },
      idade:{
        type:Sequelize.INTEGER,
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
}
