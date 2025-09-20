function receber (elemento){
    const primeitoelemento= elemento.shift()
    const ultimoelemento=elemento.pop()
    return [ primeitoelemento , ultimoelemento]
}
console.log(receber([7 , 34 , 4 , 287e72]))