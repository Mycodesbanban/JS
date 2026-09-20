import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import  type{ RootState } from "../store";


export const useAuth = () => {
    const {user} = useSelector((state:RootState) => state.auth)

    const [auth, setAuth] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(user){
            setAuth(true)
        }else{
            setAuth(false)
        }
        setLoading(false)
    }, [user])

    return {auth, loading}
}