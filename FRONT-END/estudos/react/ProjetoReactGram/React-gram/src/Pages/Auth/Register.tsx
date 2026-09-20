import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import "./Auth.css"

import { register,reset } from "../../slices/AuthSlice"
import { useSelector, useDispatch } from "react-redux"// useDispath manda uma acao pra o redux e o useSelector pega as informacoes que estao dentro do estado global
import type { RootState, AppDispatch } from "../../store"
import Message from "../../components/Message"
const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const dispatch = useDispatch<AppDispatch>()

  const {loading, error} = useSelector((state:RootState) => state.auth)



  interface User {
    name:string,
    email:string,
    password:string,
    confirmPassword:string
  }
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    const user:User = {
      name,
      email,
      password,
      confirmPassword
    }
    console.log(user)
    dispatch(register(user))
  }
  useEffect(() =>{
    dispatch(reset())
  },[dispatch])

 
  return (
    <div id="register">
      <h2>ReactGram</h2>
      <p className="subtitle">Cadraste-se para ver o que os usuarios postam! </p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} value={name}/>
        <input type="Email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
        <input type="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)} value={password}/>
        <input type="password" placeholder="confirme sua senha" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
        {!loading && <input type="submit" value="cadrastrar" />}
        {loading && <input type="submit" value="AGUARDE...." disabled />}
       {error && <Message message={error} type="error" />}
      </form>
      <p>Ja tem uma conta? <Link to="/login">Clique aqui</Link> </p>
    </div>
  )
}

export default Register
