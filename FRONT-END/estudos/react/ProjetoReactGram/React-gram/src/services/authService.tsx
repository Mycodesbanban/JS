import {api, requestConfig} from "../utils/config"

// registrar usuario no sistema

const register = async(data:unknown) => {
    const config = requestConfig("POST",data)
    try {
        const res = await fetch(api + "/users/register", config)
        console.log("STATUS:", res.status);
        console.log("CONTENT-TYPE:", res.headers.get("content-type"));

        const text = await res.text();

        console.log("RESPOSTA DO BACKEND:", text);
         const data = text ? JSON.parse(text) : null;
        if(data){
            localStorage.setItem("user", JSON.stringify(data))
        }
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}
// logout

const logout = () =>{
    localStorage.removeItem("user") // essa funcao remove o usuario
}

const login = async(data:unknown) => {
    const config = requestConfig("POST", data)
    try {
        const res = await fetch(api + "/users/login", config).then((res) => res.json()).catch((e) => console.log(e))
        if(res._id){
            localStorage.setItem("user", JSON.stringify(res))
        }
        return res
    } catch (error) {
        console.log(error)
    }
}


const authService = {
    register,
    logout,
    login
}

export default authService;