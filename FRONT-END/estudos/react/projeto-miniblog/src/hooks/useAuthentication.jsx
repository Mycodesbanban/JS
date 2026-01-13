import "../firebase/config"

import{
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,

} from "firebase/auth"
import {auth} from "../firebase/config"
 import {useState , useEffect} from "react"
 
export const useAuthentication = () =>{
    const [error , setError] = useState(null)
    const [loading, setLoading] = useState(null)
    
    // CleanUp
    const [cancelled , setCancelled] = useState(false)

//    const auth = getAuth();
     function checkIfIsCancelled (){
        if(cancelled){
            return;
     }
    }
// register
    const createUser = async (data) =>{
        checkIfIsCancelled()


        setLoading(true)
        setError("")
        try{
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user , {
                displayName:data.displayName
            })
            setLoading(false);

        }catch(e){

            console.log(e.message)
            console.log(typeof e.message)
            let systemErrorMessage 
            if(e.message.includes("password")){
                systemErrorMessage = "a senha precisa ter pelo menos 6 caracteres "
            }else if (e.message.includes("email-already")){
                systemErrorMessage = "E-mail ja cadrastado"
            }else{
                systemErrorMessage = "Ocorreu um error, por favor tente novamente mais tarde"
            }
            setLoading(false)
            setError(systemErrorMessage)
        }

    }

    // logout
    const logout = () =>{

        checkIfIsCancelled();
        signOut(auth)
    }


    // login
    const login = async (data)=> {
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try {
            await signInWithEmailAndPassword(auth, data.email , data.password)
              setLoading(false);



        } catch (e) {
              let systemErrorMessage 
            if(e.message.includes("user-not-found")){
                systemErrorMessage = "Usuario nao encontrado "}
            else if (
            e.message.includes("auth/wrong-password") ||
            e.message.includes("wrong-password")
        ) {
            systemErrorMessage = "senha incorreta"
        } else{
                systemErrorMessage="ocorreu um erro tente novamente mais tarde"
            }
            setError(systemErrorMessage)
              setLoading(false);

        }
    }


    useEffect(() =>{
        return () => setCancelled(true)
    })
    return{
        auth,
        createUser,
        error,
        loading,
        logout, 
        login
    }



}   