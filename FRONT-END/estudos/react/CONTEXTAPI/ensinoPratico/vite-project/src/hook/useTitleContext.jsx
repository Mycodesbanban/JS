import { useContext } from "react";
import { TitleContext } from "../Context/TitleContext";



export const useTitleContext = () =>{
    const context = useContext(TitleContext)

    if(!context){
        return console.log("nao existe nada aqui ")
    }
    return context
}