const ferrari={
    valor:9173908754096,
    imposto:93474748,
    Modelo:"F40",
    velmax:452,

}
const volvo={
    modelo:"v739",
    Velo:415
}
console.log(ferrari.__proto__) //{}
console.log(ferrari.__proto__=== Object.prototype) //true
console.log(volvo.__proto__)//{}
console.log(volvo.__proto__=== Object.prototype)//true
console.log(Object.prototype.__proto__) // null
console.log(Object.prototype.__proto__===null)//true

function meu(){
    
}
console.log(typeof Object , typeof meu )//function function
console.log(Object.prototype , meu.prototype) //{}{}