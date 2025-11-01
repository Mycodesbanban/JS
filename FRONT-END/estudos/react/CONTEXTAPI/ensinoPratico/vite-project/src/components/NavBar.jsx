import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <NavLink to="/">home</NavLink> <br />
        <NavLink to="/about">about</NavLink> <br />
        <NavLink to="/products">Products</NavLink> <br />
    </div>
  )
}

export default NavBar