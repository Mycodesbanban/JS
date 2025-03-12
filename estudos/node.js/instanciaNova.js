// Uma nova instância significa que cada vez que o objeto é criado, ele é independente dos outros.
// uma funcção factory retorna uma nova instancia 
module.exports=()=>{
    return {
        valor:1,
        inc(){ // o inc vai incrementar nossa função
            this.valor++
        }
    }
}
