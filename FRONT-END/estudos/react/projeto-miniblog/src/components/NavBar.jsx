import React from 'react'
import styles from "./NavBar.module.css"
import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

  const {user} = useAuthValue();
  const {logout} = useAuthentication()

  return (
    <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>
        mini <span>Blog</span>
        </NavLink>
        <ul className={styles.links_list}>
            <li>
                <NavLink to="/"className={({isActive}) => (isActive ? styles.active : "")}>Home</NavLink>
            </li>
            {!user && (
              <>
              <li><NavLink to="/Login" className={({isActive}) => (isActive ? styles.active : "")}>Entra</NavLink></li>
              <li><NavLink to="/Register" className={({isActive}) => (isActive ? styles.active : "")}>Cadastra-se</NavLink></li>
              </>
            )}
             {user && (
              <>
              <li><NavLink to="/posts/create" className={({isActive}) => (isActive ? styles.active : "")}>Criar um post</NavLink></li>
              <li><NavLink to="/dashboard" className={({isActive}) => (isActive ? styles.active : "")}>DashBoard</NavLink></li>
              </>
            )}
            <li><NavLink to="/about" className={({isActive}) => (isActive ? styles.active : "")}>Sobre</NavLink></li>
            {user && (
              <li>  <button  onClick={logout}>Sair</button></li>
       )}
        </ul>
    </nav>
  )
}

export default NavBar