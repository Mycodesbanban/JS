import React from 'react'
import styles from "./Register.module.css"
import {useState, useEffect} from "react"
import { useAuthentication } from '../../hooks/useAuthentication'
const Register = () => {
    const [displayName, setDisplay] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const [confirmPass, setPassConrf] = useState("")
    const [error, setError ] = useState("")

    const {createUser, error:authError,loading} = useAuthentication()

    const handleSubmit = async (e)=>{
        e.preventDefault()

        setError("")
        const user ={
            displayName,
            email,
            password,
        }
        if(password !== confirmPass){
            setError("A senha nao estao iguais")
            return
        }

        const res = await createUser(user)


        console.log(user)
       
    }
     useEffect(() =>{
            if(authError){
                setError(authError)
            }
        }, [authError])

  return (
    <div className={styles.register}>
        <h1>Cadastre-se para publicar</h1>
        <p>Crie seu usuario e compartilhe suas historias.</p>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input type="text" name='displayName' required placeholder='Qual sera seu nome de usuario' value={displayName}  onChange={(e) => setDisplay(e.target.value)}/>
                 </label>
                <label>
                    <span>E-mail: </span>
                <input type="email" name='email' required placeholder='Digite seu Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    <span>Senha:</span>
                <input type="password" name="password" required placeholder='Digite sua senha' value={password} onChange={(e) => setPass(e.target.value)}/>
                </label>
                <label>
                    <span>confirme sua senha:</span>
                <input type="password" name="ConfirmPassword" required placeholder='Digite sua senha Novamente' value={confirmPass} onChange={(e) => setPassConrf(e.target.value)}/>
                </label>
                {!loading && <button className='btn'>Cadrastar</button>}
                {loading && <button className='btn'>aguarde </button>}
                {error && <p className='error'>   
                        {error} </p>}
        </form>


    </div>
  )
}

export default Register