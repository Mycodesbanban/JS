import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/authService";

const user = JSON.parse(localStorage.getItem("user")!) // transformando em formato json, e falando pra o typescript confia em mim que isso aqui nao e um null
interface User {
    _id:string,
    name:string,
    email:string,
    token:string
}

interface InitialState  {
    user:User | null,
    error: string | null | false,
    sucess:boolean | null,
    loading:boolean
}


const initialState:InitialState = {
    user: user ? user : null, 
    error:false ,
    sucess:false, 
    loading:false

}

export const register = createAsyncThunk<any, unknown, {rejectValue:string}>("auth/register", async(user, thunkApi) =>{ //thunkApi serve para usar algumas funcoes extras  
    const data = await authService.register(user) // user 

    if(data.errors){
        return thunkApi.rejectWithValue(data.errors[0])
    }
    return data
    

}) // usado pra criar acoes assincronas, definimos o nome da action.

export const logout = createAsyncThunk("auth/logout", async()=>{
    await authService.logout()
})

export const login = createAsyncThunk<any, unknown, {rejectValue:string}>("auth/login", async(user, thunkApi) =>{ //thunkApi serve para usar algumas funcoes extras  
    const data = await authService.login(user) // user 

    if(data.errors){
        return thunkApi.rejectWithValue(data.errors[0])
    }
    return data
    

})

export const authSlice = createSlice({
    name:"auth",
    initialState, 
    reducers:{
        reset:(state) => { // reseto tudo
            state.loading = false
            state.error = false
            state.sucess = false
        },
    },
    extraReducers:(builder) => { // trabalha diretamente com os estados atuais de cada requisicao
        builder.addCase(register.pending, (state) =>{ // carregando
            state.loading = true
            state.error= false
        }).addCase(register.fulfilled, (state, action) =>{
            state.sucess = true
            state.loading = false 
            state.error = null
            state.user = action.payload // pegando o valor que foi retornado no createAsnycThunk, no caso o usuario
        }).addCase(register.rejected, (state, action) =>{
            state.error= action.payload ?? "error ao cadrastar"// pegando o error retornando
            state.loading = false
            state.user = null
        }).addCase(logout.fulfilled, (state, action) =>{
            state.sucess = true
            state.error = null
            state.user = null // pegando o valor que foi retornado no createAsnycThunk, no caso o usuario
        }).addCase(login.pending, (state) =>{ // carregando
            state.loading = true
            state.error= false
        }).addCase(login.fulfilled, (state, action) =>{
            state.sucess = true
            state.loading = false 
            state.error = null
            state.user = action.payload // pegando o valor que foi retornado no createAsnycThunk, no caso o usuario
        }).addCase(login.rejected, (state, action) =>{
            state.error= action.payload ?? "error ao entrar"// pegando o error retornando
            state.loading = false
            state.user = null
        })
    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer