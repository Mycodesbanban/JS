import "./NavBar.css"
import { NavLink, Link } from "react-router-dom"
import { useState } from "react"
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

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    dispatch((reset()))


    navigate("/login")
  }

  return (
    <nav id="nav">

      <Link to="/">ReactGram</Link>

      <form id="search-form">
        <BsSearch className="search"/>
        <input type="text" placeholder="Pesquisar" />
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