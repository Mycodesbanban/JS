const quasearray={0:"Rafael", 1:"ana", 2:"Joerde" , 3:"jews"}
console.log(quasearray)
Object.defineProperty(quasearray, "toString" , {
    value: function(){ return Object.values(this)},
    enumerable:false
})
console.log(quasearray[0])

const meuarray = ["Rafael" , "ana" , "Joerde", "jews"]
console.log(quasearray.toString(), meuarray);      