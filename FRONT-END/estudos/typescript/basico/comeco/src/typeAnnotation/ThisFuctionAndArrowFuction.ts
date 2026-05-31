// this so funciona em em fuction, por que em arrow fuction ele se torna espoco global
export function funcao (this:Date):void{ // e assim que nos colocamos tipo no this 

    console.log(this)
}