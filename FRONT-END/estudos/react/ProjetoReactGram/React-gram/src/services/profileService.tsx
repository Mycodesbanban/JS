import { api, requestConfig } from "../utils/config";


const publishPhoto = async(data, token) => {
    const config = requestConfig("POST", data, token, true)
    try {
        const res = await fetch(api + "/photos",config).then((res) => res.json()).catch((e)=> e)
        return res 
    } catch (error) {
        
    }
}
const getUserPhoto = async(id, token) => {
    const config = requestConfig("GET", null,  token )
    try{    
        const res = await fetch (api + "/photos/user/" + id, config) .then((res)=> res.json()).catch((error) => error)
        return res
    }catch(error){
      console.log(error)  
    }
}


const deletePhoto = async(id:string, token) => {
    const config = requestConfig("DELETE", null, token)
    try{
        const res = await fetch(api + "/photos/" + id, config).then((res) => res.json()).catch((e) => e)
        return res 
    }catch(e){
        console.log(e)
    }
}
const editPhoto = async (data, id:string, token) => {
    const config = requestConfig("PUT", data, token )
    try {
        const res = await fetch(api + "/photos/" + id, config).then((res) => res.json()).catch((err) => err)
        return res
    } catch (error) {
        console.log(error)
    }
}


const getPhotoById = async (id:string, token) => {
    const config = requestConfig("GET", null , token )
    try {
        const res = await fetch(api + "/photos/" + id, config).then((res) => res.json()).catch((err)=> err)
        return res
    } catch (error) {
        console.log(error)
    }
}

const like = async(id:string , token ) => {
    const config = requestConfig("PUT", null , token)
    try {
        const res = await fetch(api + "/photos/likes/" + id, config).then((res) => res.json()).catch((err)=> err)
        return res 
    } catch (error) {
        console.log(error)
    }
}

const comments = async(data, id, token) => {
    const config = requestConfig("PUT", data, token)
    try {
        const res = await fetch(api + "/photos/comments/" + id, config).then((res) => res.json()).catch((err)=> err)
        return res 
    } catch (error) {
        console.log(error)
    }
}

const getAllPhoto = async(token) => {
    const config = requestConfig("GET", null, token)
    try {
        const res = await fetch(api + "/photos" , config).then((res) => res.json()).catch((err)=> err)
        return await res
    } catch (error) {
        console.log(error)
    }
}


const searchPhotos = async(query, token) => {
    const config = requestConfig("GET", null,  token)
     try {
        const res = await fetch(api + "/photos/search?q=" + query , config).then((res) => res.json()).catch((err)=> err)
        return await res
    } catch (error) {
        console.log(error)
    }

}


const photoService = {publishPhoto, getUserPhoto, deletePhoto, editPhoto, getPhotoById, like, comments, getAllPhoto, searchPhotos}



export default photoService