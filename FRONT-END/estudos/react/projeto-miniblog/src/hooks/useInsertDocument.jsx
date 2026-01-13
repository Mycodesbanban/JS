import { useState,useEffect, useReducer, act } from "react";
import {database} from "../firebase/config"
import { collection , addDoc , Timestamp} from "firebase/firestore";

const initialState = {
    loading:null,
    error:null
}

const insertReducer = (state, action) => {
    
    switch(action.type){
        case"LOADING":
        return{loading:true , error:null}
        case"INSERTED_DOC":
        return {loading:false , error:null}
        case"ERROR":
        return {loading:false, error:action.playload}
        default:
            return state
    }


}


export const useInsertDocument = (docCollection) => {
    const [res, dis] = useReducer(insertReducer, initialState)

    // deal with memory leak

    const [ cancelled, setCancelled ] = useState(false)

    const checkCancelBeforeDispatch = (action) => {
        if(!cancelled){
            dis(action)
        }
    }

    const insertDocument = async (document) => {
            checkCancelBeforeDispatch({

                type:"LOADING"
            }
            )

        try{
            const newDocument = {...document, createAt :Timestamp.now()}
            const insertedDocument = await addDoc(
                collection(database, docCollection ),
                newDocument
            )
            checkCancelBeforeDispatch({

                type:"INSERTED_DOC",
                playload:insertedDocument
            }
            )
        }catch(error) {
            checkCancelBeforeDispatch({

                type:"ERROR",
                playload:error.message
            }
            )

        }
    }
    useEffect(()=>{
        return () => setCancelled(true)
    }, [])
    return {
        insertDocument , res
    }
}