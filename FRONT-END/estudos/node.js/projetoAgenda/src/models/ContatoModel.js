const mongoose = require('mongoose');
const validator = require("validator")

const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: false, default:""},
  email: { type: String, required: false, default:'' },
  telefone: { type: String, required: false, default:""},
  riadoEm: { type: Date, default:Date.now},
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato (body){
  this.body = body
  this.errors = []
  this.contato = null

}
Contato.buscarPorID=  async function(id){
  if(typeof id !== "string" ) return;
  const user = await ContatoModel.findById(id)
  return user
}

Contato.prototype.register =async function() {
  this.validar()
   if(this.errors.length > 0) return
  this.contato= await ContatoModel.create(this.body)
}
Contato.prototype.validar = function() {
    this.cleanUp();
    // Validar se os dados sao concretos

    //*verificando se o email e valido
  if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push("E-mail invalido")
  if(!this.body.nome) this.errors.push("insirar um nome")
  if(!this.body.email && !this.body.telefone){
    this.errors.push("insirar um email ou um telefone")
  } 
  

  //* verificar se a senha tem entre 3 a 50 caracters

  


  }

Contato.prototype.cleanUp = function(){
    for(const key in this.body){
    if(typeof this.body[key]  !== "string") {
      this.body[key] = "";
    }
    }
    this.body = {
      nome: this.body.nome,
      sobrenome: this.body.sobrenome,
      email: this.body.email,
      telefone: this.body.telefone,
      
    }
  }


Contato.prototype.edit = async function (id) {
    if(typeof id !== "string") return;
    this.validar()
    if(this.errors.length > 0  ) return;

  this.contato = await ContatoModel.findByIdAndUpdate(id ,this.body , {new:true}); // retorna os dados atualizados com o new

}


module.exports = Contato;
