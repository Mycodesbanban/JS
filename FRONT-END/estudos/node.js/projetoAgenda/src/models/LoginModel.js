const mongoose = require('mongoose');
const validator = require("validator")
const bcrypt = require("bcrypt")

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password:{type: String, required:true}
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body){
    this.body = body // salvando os dados da requisicao
    this.errors = [] // caso tenha algum erro dentro desse array nao posso cadrastrar meu usuario no banco de dados 
    this.user = null 

  }
  async logar (){
      this.validar();
    if(this.errors.length > 0)return
     this.user = await LoginModel.findOne({email:this.body.email})
     if(!this.user){
       this.errors.push("Usario nao exite")
       return
       
      } 
     if(!bcrypt.compareSync(this.body.password, this.user.password)){
      this.errors.push("senha invalida")
      this.user = null
      return;
     }
     


  }


  async register(){
    this.validar();
    if(this.errors.length > 0)return

   await this.userExists()

    if(this.errors.length > 0)return

    const salt = bcrypt.genSaltSync()
    this.body.password = bcrypt.hashSync(this.body.password , salt);
   
      this.user= await LoginModel.create(this.body)
  }
   async userExists(){
      this.user = await LoginModel.findOne({email:this.body.email})
     if(this.user) this.errors.push("Usuario ja existe")
  
  }
  validar() {
    this.cleanUp();
    // Validar se os dados sao concretos

    //*verificando se o email e valido
  if(!validator.isEmail(this.body.email)) this.errors.push("E-mail invalido")

  //* verificar se a senha tem entre 3 a 50 caracters

  if(this.body.password.length < 3 || this.body.password.length > 50){
    this.errors.push("senha com poucos ou muitos caracteres")
  } 


  }

  cleanUp(){
    for(const key in this.body){
    if(typeof this.body[key]  !== "string") {
      this.body[key] = "";
    }
    }
    this.body = {
      email: this.body.email,
      password:this.body.password
    }
  }
}

module.exports = Login;
