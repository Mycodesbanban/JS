import "./NavBar.css"
import { NavLink, Link } from "react-router-dom"
import { useState, type FormEvent } from "react"
import { useAuth } from "../hooks/useAuth"
import type { RootState } from "../store"
import { useDispatch, useSelector } from "react-redux" // envia acoes para o redux 
import { useNavigate } from "react-router-dom"

import { logout, reset } from "../slices/AuthSlice"


import {
  BsSearch,
  BsHouseDoorFill,
  BsFillCameraFill,
  BsFillPersonFill,
} from "react-icons/bs"


const NavBar = () => {
  const {auth} = useAuth()
  const {user} = useSelector((state:RootState) => state.auth)
  const navigate = useNavigate()

  const [query, setQuery] = useState<string>("")

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    dispatch((reset()))


    navigate("/login")
  }

  const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(query){
      return navigate(`/search?q=${query}`)
    }

  }



  return (
    <nav id="nav">

      <Link to="/">ReactGram</Link>

      <form id="search-form" onSubmit={handleSearch}>
        <BsSearch className="search"/>
        <input type="text" placeholder="Pesquisar" onChange={(e) => setQuery(e.target.value)} value={query}/>
      </form>

      <ul className="nav-links">
        {auth ? ( // caso esteja autenticado, vai pra a home caso nao, vai pra o register e o login
          <>
          <li>
          <NavLink to="/">
            <BsHouseDoorFill />
          </NavLink>
        </li>
        {user && (
          <li>
            <NavLink to={`/users/${user._id}`}>
            <BsFillCameraFill/>
            </NavLink>
          </li>
        
        )}
        <li><NavLink to="/profile"><BsFillPersonFill/></NavLink></li>
        <li><span onClick={handleLogout}>sair</span></li>
          </>
          
        ):(<>
          <li>
          <NavLink to="/login">
            Entrar
          </NavLink>
        </li>

        <li>
          <NavLink to="/register">
            Cadastre-se
          </NavLink>
        </li>
        
        </>)}

      
      </ul>

    </nav>
  )
}

export default NavBar