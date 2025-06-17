//importando o css
import "./NavBar.css";
// importando o componente link
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
        {/* Substitui a tag <a> do HTML tradicional, evitando o recarregamento completo da página */}
        <Link to="/">Home</Link>
        {/* to:Define para qual rota o link deve levar*/}
        <Link to="/about">Sobre</Link>
        
    </nav>
  )
}

// chamando no app.jsx
//   <BrowserRouter>
//         {/* Adicionando o navBar */}
//        <NavBar/>
//  <BrowserRouter/>

export default NavBar
