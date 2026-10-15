import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import photoService from "../services/profileService";
import type {RootState } from "../store";
interface Photo {
    _id: string
    title: string
    image: string
    userId: string
    userName: string
    likes:string[]
}



interface IntialState {
    photo:Photo | null ,
    photos: Photo[]
    error:null | string
    sucess: boolean
    loading:boolean
    message: string | null
}

const intialState: IntialState = {
    photo:  null ,
    photos:[],
    error:null,
    sucess:false, 
    loading:false,
    message:null 

}


export const publishPhoto = createAsyncThunk("photo/publish",
    async(photo, thunkAPI) => {
         const user = JSON.parse(localStorage.getItem("user")!)
        const token = user.token

        const data = await photoService.publishPhoto(photo, token)

        if(data.errors ){
            return thunkAPI.rejectWithValue(data.errors[0])
        }
        return data
    }
)

export const getUserPhoto = createAsyncThunk("photo/userphotos", async(id, thunkAPI) => {
     const user = JSON.parse(localStorage.getItem("user")!)
        const token = user.token

        const data = await photoService.getUserPhoto(id, token)
        return data 
})

export const deletePhoto = createAsyncThunk("photo/delete", async(id, thunkAPI) => {
    const user = JSON.parse(localStorage.getItem("user")!)
        const token = user.token
        const data = await photoService.deletePhoto(id, token)
        if(data.errors ){
            return thunkAPI.rejectWithValue(data.errors[0])
        }
        return data

})
export const editPhoto = createAsyncThunk("photo/edit", async(photoData, thunkAPI) => {
    const user = JSON.parse(localStorage.getItem("user")!)
        const token = user.token
        const data = await photoService.editPhoto({title:photoData.title, },photoData.id, token)
        return data 
})

export const getPhotoById = createAsyncThunk("photo/get", async(id) => {
        const user = JSON.parse(localStorage.getItem("user")!)
        const token = user.token
    const data = await photoService.getPhotoById(id, token)
    return data

})

export const like = createAsyncThunk("photo/like", async(id, thunkAPI)=> {
     const user = JSON.parse(localStorage.getItem("user")!)
        const token = user.token
    const data = await photoService.like(id, token)
     if(data.errors ){
            return thunkAPI.rejectWithValue(data.errors[0])
        }
    return data
})

export const comments = createAsyncThunk("photo/comment", async(photoData, thunkAPI) => {
    const user = JSON.parse(localStorage.getItem("user")!)
        const token = user.token
        const data = await photoService.comments({comments:photoData.comments},photoData.id,  token)
        if(data.errors ){
            return thunkAPI.rejectWithValue(data.errors[0])
        }
    return data
})

export const getAllPhoto = createAsyncThunk("photo/getAll", async() => {
       const user = JSON.parse(localStorage.getItem("user")!)
        const token = user.token
    const data = await photoService.getAllPhoto(token)
    return data
} )


export const searchPhotos = createAsyncThunk("photo/search", async(query) => {
    const user = JSON.parse(localStorage.getItem("user")!)
        const token = user.token
    const data = await photoService.searchPhotos(query, token)
    return data
})


export const photoSlice = createSlice({
    name:"photo",
    initialState:intialState,
    reducers:{
        resetMessage:(state) => {
            state.message = null 
        }
    },
    extraReducers:(builder) => {
        builder.addCase(publishPhoto.pending, (state) =>{ // carregando
                                state.loading = true
                                state.error= null
                            }).addCase(publishPhoto.fulfilled, (state, action) =>{
                                state.sucess = true
                                state.loading = false 
                                state.error = null
                                state.photo = action.payload // pegando o valor que foi retornado no createAsnycThunk, no caso o usuario
                               state.photos.unshift(state.photo)
                               state.message = "postagem enviada"
                            }).addCase(publishPhoto.rejected, (state, action) =>{
                                console.log(state, action)
                                state.error= action.payload as string ?? "error ao cadrastar"// pegando o error retornando
                                state.loading = false
                                state.photo = null
                            }).addCase(getUserPhoto.pending, (state) =>{ // carregando
                                state.loading = true
                                state.error= null
                            }).addCase(getUserPhoto.fulfilled, (state, action) =>{
                                state.sucess = true
                                state.loading = false 
                                state.error = null
                               // pegando o valor que foi retornado no createAsnycThunk, no caso o usuario
                               state.photos = action.payload
                    
                            }).addCase(deletePhoto.pending, (state) =>{ // carregando
                                state.loading = true
                                state.error= null
                            }).addCase(deletePhoto.fulfilled, (state, action) =>{
                                state.sucess = true
                                state.loading = false 
                                state.error = null
                               state.photos = state.photos.filter((photo) => {
                                return photo._id !==action.payload.id
                               })

                               state.message = action.payload.message
                            }).addCase(deletePhoto.rejected, (state, action) =>{
                                console.log(state, action)
                                state.error= action.payload as string ?? "error ao cadrastar"// pegando o error retornando
                                state.loading = false
                                state.photo = null
                            }).addCase(editPhoto.pending, (state) =>{ // carregando
                                state.loading = true
                                state.error= null
                            }).addCase(editPhoto.fulfilled, (state, action) =>{
                                state.sucess = true
                                state.loading = false 
                                state.error = null
                                state.photos.map((photo) => {
                                    if(photo._id === action.payload.photo._id){
                                        return photo.title = action.payload.photo.tilte
                                    }
                                    return photo
                                })
                               state.message = action.payload.message
                            }).addCase(editPhoto.rejected, (state, action) =>{
                                console.log(state, action)
                                state.error= action.payload as string ?? "error ao cadrastar"// pegando o error retornando
                                state.loading = false
                                state.photo = null
                            }).addCase(getPhotoById.pending, (state) =>{ // carregando
                                state.loading = true
                                state.error= null
                            }).addCase(getPhotoById.fulfilled, (state, action) =>{
                                state.sucess = true
                                state.loading = false 
                                state.error = null
                               // pegando o valor que foi retornado no createAsnycThunk, no caso o usuario
                               state.photo = action.payload
                    
                            }).addCase(like.fulfilled, (state, action) => {
                        const { photoId, userId, message } = action.payload

                        if (state.photo?._id === photoId) {
                            state.photo.likes ??= []

                            if (!state.photo.likes.includes(userId)) {
                                state.photo.likes.push(userId)
                            }
                        }

                        const photo = state.photos.find((p) => p._id === photoId)

                        if (photo) {
                            photo.likes ??= []

                            if (!photo.likes.includes(userId)) {
                                photo.likes.push(userId)
                            }
                        }

                        state.loading = false
                        state.error = null
                        state.message = message
                    }).addCase(like.rejected, (state, action) =>{
                                console.log(state, action)
                                state.error= action.payload as string ?? "error ao cadrastar"// pegando o error retornando
                                state.loading = false
                                
                            }).addCase(comments.fulfilled, (state, action) => {
                        const { photoId, userId, message } = action.payload
                            state.photo.comments.push(action.payload.comments)

                        state.loading = false
                        state.error = null
                        state.message = message
                    }).addCase(comments.rejected, (state, action) =>{
                                console.log(state, action)
                                state.error= action.payload as string ?? "error ao cadrastar"// pegando o error retornando
                                state.loading = false
                                
                            }).addCase(getAllPhoto.pending, (state) =>{ // carregando
                                state.loading = true
                                state.error= null
                            }).addCase(getAllPhoto.fulfilled, (state, action) =>{
                                state.sucess = true
                                state.loading = false 
                                state.error = null
                               // pegando o valor que foi retornado no createAsnycThunk, no caso o usuario
                               state.photos = action.payload
                    
                            }).addCase(searchPhotos.pending, (state) =>{ // carregando
                                state.loading = true
                                state.error= null
                            }).addCase(searchPhotos.fulfilled, (state, action) =>{
                                state.sucess = true
                                state.loading = false 
                                state.error = null
                               // pegando o valor que foi retornado no createAsnycThunk, no caso o usuario
                               state.photos = action.payload
                    
                            })
    }
})


export const {resetMessage} = photoSlice.actions

export default photoSlice.reducer