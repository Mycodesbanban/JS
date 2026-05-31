export class Calculadora {
    constructor(public number:number ){

    }
    add(n:number):this{ // retorna a propria instancia da calculadora (this)
        this.number += n
        return this
    }
      sub(n:number):this{ // retorna a propria instancia da calculadora (this)
        this.number -= n
        return this
    }
    
    mul(n:number):this{ // retorna a propria instancia da calculadora (this)
        this.number *= n
        return this
    }
      div(n:number):this{ // retorna a propria instancia da calculadora (this)
        this.number /= n
        return this
    }
}// podemos extender e a outra classe usa o mesmo this

export class SubCalculadora extends Calculadora{
    p(n:number):this {
      this.number **=  n;
      return this
    }
}

const calculadora = new SubCalculadora(0)
calculadora.add(5).mul(2).sub(5).p(6)
console.log(calculadora)


// builder

export class Request {
    private method:"get" | "post" | null = null
    private url: string | null = null 

    setMedthod(method : "get" | "post"):this {
        this.method = method
        return this // retorna o method 
    }
     setUrl(url:string):this {
        this.url = url
        return this // retorna o method 
    }

    send():void{
        console.log(`enviando dados via ${this.method} para ${this.url} `)
    }
}


const request =new  Request()
request.setUrl("chipata.com").setMedthod("get")
request.send()