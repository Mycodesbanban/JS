export const api:string = "http://localhost:3000/api"

export const upload:string = "http://localhost:3000/uploads"

type Method = "DELETE" | "GET" | "PUT" | "POST"| "PATCH"

export const requestConfig = (method:Method, data:unknown, token:string | null = null , image:boolean = false )=>{


    let config 
     if(image){
        config = {
            method,
            body:data as BodyInit, // tipo de dados que o body fornece, entao o data vai estar com os dados que o BodyInit fornece
            headers:{}
        }
    } else if(method ==="DELETE" || data === null ){
        config={
            method,
            headers:{}
        }

    }else{
        config = {
            method,
            body:JSON.stringify(data),
            headers:{"Content-Type":"application/json"}
        }
    }

    if(token) {
        config.headers.Authorization = `Bearer ${token}` // adicionando o token na authorization
    }

    return config
}