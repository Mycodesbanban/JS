import { useReducer, createContext} from "react";

export const TitleContext= createContext()

export const title = (state, action) =>{
   switch(action.type){
    case "RED":
    return{...state, color:"red"}
    case "BLUE":
    return{...state, color:"blue"}
    default:
        return state;
   }
}

export const TitleContextProvider = ({children}) =>{

    const [state, dispatch] = useReducer(title,{color:"purple"})
    console.log("title color state", state)
    return(
       <TitleContext.Provider value={{...state, dispatch }} >
        {children}
       </TitleContext.Provider>
    )
}