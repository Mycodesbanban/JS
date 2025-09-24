const mongoose = require('mongoose');
const validator = require("validator")

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
  async register(){
    this.validar();
    if(this.errors.length > 0)return
    try{
      this.user= await LoginModel.create(this.body)

    } catch(er){
      console.log(er)
    }
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
