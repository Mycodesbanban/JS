// Uma instância única significa que o mesmo objeto é compartilhado em todo o código. 
// node faz cache
module.exports={
    valor:1,
    inc(){ // o inc vai incrementar nossa função
        this.valor++
    }
}