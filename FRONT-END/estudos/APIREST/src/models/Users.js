import Sequelize, {Model} from "sequelize"
import bcrypt from "bcryptjs"


export default class Users extends Model {
  static init(sequelize){
    super.init({
      nome:{
       type: Sequelize.STRING,
       defaultValue:"",
       validate:{
         len:{
          args:[3,255],
          msg:"O campo nome deve ter entre 3 a 255 caracteres"}
       }
      },
       email:{
       type: Sequelize.STRING,
       defaultValue:"",
       unique:{
        msg:"email ja existe"
       },
       validate:{
        isEmail:{msg:"email invalido"}
       }
      },
       password:{
       type: Sequelize.STRING,
       defaultValue:"",

      },
       password_hash:{
       type: Sequelize.VIRTUAL,
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

        user.password_hash = await bcrypt.hash(user.password , 8 )
      }
    })
    return this
  }
  passwordIsValid(password){
    return bcrypt.compare(password, this.password_hash)
  }
}
