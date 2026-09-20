import "./Auth.css"
import { Link } from "react-router-dom"
import Message from "../../components/Message"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { login, reset } from "../../slices/AuthSlice"
import type { RootState } from "../../store"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const {loading, error} = useSelector((state:RootState) => state.auth)

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const user = {
      email, password
    }
    dispatch(login(user))

  }
  useEffect(() => {
    dispatch(reset())
  }, [dispatch])
  return (
    <div id="login">
      <h2>ReactGram</h2>
      <p className="subtitle">faca login pra ver o que ha de novo.</p>
      <form onSubmit={handleSubmit}>
      <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={email || ""} />
      <input type="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)} value={password || ""}/>
        {!loading && <input type="submit" value="Entrar" />}
        {loading && <input type="submit" value="AGUARDE...." disabled />}
       {error && <Message message={error} type="error" />}
      </form>
      <p>Nao tem uma conta? <Link to={"/register"}> Clique aqui</Link></p>
    </div>
  )
}

export default Login
