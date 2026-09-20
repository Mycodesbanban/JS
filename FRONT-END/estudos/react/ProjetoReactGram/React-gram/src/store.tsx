import {configureStore} from "@reduxjs/toolkit"
import AuthReducer from "./slices/AuthSlice"
import userReducer from "./slices/userSlide"
export const store = configureStore({ // funcao usada pra criar uma caixa central onde ficam os estados globais da aplicacao
    reducer:{
        auth:AuthReducer,
        user:userReducer
    },

})

export type RootState = ReturnType<typeof store.getState>;


export type AppDispatch = typeof store.dispatch;