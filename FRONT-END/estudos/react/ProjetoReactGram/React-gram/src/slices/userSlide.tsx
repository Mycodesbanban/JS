import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import userService from "../services/userService";
import type { RootState } from "../store";

interface User {
    _id:string,
    name:string,
    email:string,
    bio:string,
    password:string, 
    profileImage: string 
}

interface InitialState {
    user:User | null | {}
    error: boolean | null
    sucess: boolean | null
    loading: boolean
    message:string | null
}

const initialState:InitialState ={
    user: null,
    error:false,
    sucess:false,
    loading:false,
    message:null

}

export const profile = createAsyncThunk<User, void>(
    "user/profile",
    async () => {

        const user = JSON.parse(localStorage.getItem("user")!)

        const token = user.token

        const data = await userService.profile(null, token)

        return data
    }
)

export const updateProfile = createAsyncThunk(
    "user/update",
    async (formData: FormData, thunkApi) => {

        const user = JSON.parse(localStorage.getItem("user")!)
        const token = user.token

        const data = await userService.updateProfile(formData, token)

        if (data.errors) {
            return thunkApi.rejectWithValue(data.errors[0])
        }

        return data
    }
)

export const getUserDetails = createAsyncThunk("user/get", async(id, thunkAPI)=> {
    const data = await  userService.getUserDetails(id)
    return data 
})



export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        resetMessage:(state) =>{
            state.message = null
        }
    },
    extraReducers: (builder) => {  builder.addCase(profile.pending, (state) =>{ // carregando
                state.loading = true
                state.error= false
            }).addCase(profile.fulfilled, (state, action) =>{
                state.sucess = true
                state.loading = false 
                state.error = null
                state.user = action.payload // pegando o valor que foi retornado no createAsnycThunk, no caso o usuario
            }).addCase(updateProfile.pending, (state) =>{ // carregando
                        state.loading = true
                        state.error= false
                    }).addCase(updateProfile.fulfilled, (state, action) =>{
                        state.sucess = true
                        state.loading = false 
                        state.error = null
                        state.user = action.payload // pegando o valor que foi retornado no createAsnycThunk, no caso o usuario
                        state.message = "Usuario atualizado com sucesso"
                    }).addCase(updateProfile.rejected, (state, action) =>{
                        console.log(state, action)
                        state.error= action.payload ?? "error ao cadrastar"// pegando o error retornando
                        state.loading = false
                        state.user = {}
                    }).addCase(getUserDetails
                        .pending, (state) =>{ // carregando
                state.loading = true
                state.error= false
            }).addCase(getUserDetails
                .fulfilled, (state, action) =>{
                state.sucess = true
                state.loading = false 
                state.error = null
                state.user = action.payload // pegando o valor que foi retornado no createAsnycThunk, no caso o usuario
            })}
})

export const {resetMessage} = userSlice.actions

export default userSlice.reducer
