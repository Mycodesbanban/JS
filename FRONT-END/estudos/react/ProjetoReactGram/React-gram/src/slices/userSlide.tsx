import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import userService from "../services/userService";
import type { RootState } from "../store";

interface User {
    _id:string,
    name:string,
    email:string,
}

interface InitialState {
    user:User | null
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

export const profile = createAsyncThunk<User, void , {state:RootState}>("user/profile", async(user , thunkApi )=>{

    const token = thunkApi.getState().auth.user.token
    const data = await userService.profile(user, token)
    return data;

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
            })}
})

export const {resetMessage} = userSlice.actions

export default userSlice.reducer
