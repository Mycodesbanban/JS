import React from 'react'
import styles from "./Login.module.css"
import {useState, useEffect} from "react"
import { useAuthentication } from '../../hooks/useAuthentication'
const Login = () => {
      // const [displayName, setDisplay] = useState("")
      const [email, setEmail] = useState("")
      const [password, setPass] = useState("")
      // const [confirmPass, setPassConrf] = useState("")
      const [error, setError ] = useState("")
  
      const {login, error:authError,loading} = useAuthentication()
  
      const handleSubmit = async (e)=>{
          e.preventDefault()
  
          setError("")
          const user ={
              email,
              password,
          }
  
          const res = await login(user)
  
  
          console.log(user)
         
      }
       useEffect(() =>{
              if(authError){
                  setError(authError)
              }
          }, [authError])
  
  return (
    <div className={styles.login}>
          <h1>Logue em seu usuario</h1>
        <p>Volte para seu usuario para conseguir retomar suas publicacoes</p>
        <form onSubmit={handleSubmit}>
                <label>
                    <span>E-mail: </span>
                <input type="email" name='email' required placeholder='Digite seu Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    <span>Senha:</span>
                <input type="password" name="password" required placeholder='Digite sua senha' value={password} onChange={(e) => setPass(e.target.value)}/>
                </label>

                {!loading && <button className='btn'>entrar</button>}
                {loading && <button className='btn'>aguarde </button>}
                {error && <p className='error'>   
                        {error} </p>}
        </form>


    </div>
  )
}

export default Login