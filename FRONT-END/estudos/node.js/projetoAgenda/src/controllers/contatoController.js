const Contato = require("../models/ContatoModel")

exports.index =  (req , res) =>{
    res.render("Contato", {
       contato:{} 
    })
}



exports.register = async (req , res) =>{
    try{
        const contato= new Contato(req.body)
         await contato.register();
     
        if(contato.errors.length > 0 ){
           req.flash("errors", contato.errors)
          return req.session.save(() =>{
           res.redirect("back")
         })
        }
          req.flash("success", "Usuario registrado com sucesso")
         return req.session.save(() =>{
           res.redirect(`/contato/index/${contato.contato._id}`)
         })

    } catch (e){
        console.log(e)
         return res.render(404)
    }

}

exports.editIndex =  async function (req , res ) {
    if(!req.params.id) return res.render("404")
    const user = await Contato.buscarPorID(req.params.id)

    if(!user) return res.render("404")


    res.render("Contato", {
      contato:user  
    })
}

exports.edit = async (req, res)=> {
  try{

    if(!req.params.id) return res.render("404")
   const contato = new Contato(req.body);
    await contato.edit(req.params.id)
 
       if(contato.errors.length > 0 ){
            req.flash("errors", contato.errors)
           return req.session.save(() =>{
            res.redirect("back")
          })
         }
           req.flash("success", "atualizado com sucesso")
          return req.session.save(() =>{
            res.redirect(`/contato/index/${contato.contato._id}`)
          })
  } catch(e){
    console.log(e)
    res.render("404")
  }



}

exports.delete = async function (req , res) {
   
    if(!req.params.id) return res.render("404")
    const user = await Contato.delete(req.params.id)

    if(!user) return res.render("404")

     req.flash("success", "contato apagado com sucesso")
      return req.session.save(() =>{
          res.redirect("back")
          })
      
}
