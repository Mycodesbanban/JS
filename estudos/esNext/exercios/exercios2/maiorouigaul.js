const maiorouigual=function(maior , igual){
    if ( typeof maior !=  typeof igual){
        return false
    }
    return maior >= igual

}
console.log(maiorouigual(1,0))