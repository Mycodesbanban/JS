// overload: baseado nos paramentos da funcao ela vai se comportar de maneiras diferentes


type Addyer = {
    (x:number):number;
    (x:number, y:number):number;
    (...arg:number[]):number;

}

const adder: Addyer = (x:number,y?:number,...args:number[] ) =>{
     if(args.length > 0) return args.reduce((s,v)=> s+v, 0) + x +(y || 0)
     return x +(y || 0)
     
}

console.log(adder(1,3, 8493938,34994, 493793748934))


