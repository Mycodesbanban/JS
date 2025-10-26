import React from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
  return (
    <div>
        <NavLink to="/">home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/products">Products</NavLink>
    </div>
  )
}

export default NavBar