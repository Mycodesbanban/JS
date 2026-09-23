import {api, requestConfig} from "../utils/config"


const profile = async(data:unknown , token) =>{
     console.log("TOKEN RECEBIDO NO PROFILE:", token)
    const config = requestConfig("GET", data, token)
     console.log("CONFIG DO PROFILE:", config)
     console.log("AUTHORIZATION:", config.headers.Authorization)
    
   try {
        const res = await fetch(api + "/users/profile", config).then((res) => res.json()).catch((error) => error)

        return res 
   } catch (error) {
        console.log(error)
   } 
}
// updateUser

const updateProfile = async (data: unknown, token: string) => {
    const config = requestConfig("PUT", data, token, true)

    try {
        const res = await fetch(api + "/users/", config)

        console.log("STATUS:", res.status)

        const text = await res.text()

        console.log("RESPOSTA DO BACKEND:", text)

        if (!res.ok) {
            return {
                errors: [text]
            }
        }

        return text ? JSON.parse(text) : null

    } catch (error) {
        console.log("ERRO:", error)
        throw error
    }
}

const getUserDetails = async(id) => {
    const config = requestConfig("GET")
    try {
        const res = await fetch(api + "/users/" + id, config)
        .then((res) => res.json())
        .catch((error) => error)
        return res 
    } catch (error) {
        console.log(error)
    }
}


const userService = {
    profile,
    updateProfile,
    getUserDetails
}


export default userService