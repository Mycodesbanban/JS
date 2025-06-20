//importando o css
import "./NavBar.css";
// importando o componente link
import {Link , NavLink} from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      {/* pagina home  */}
      <NavLink to="/">Home</NavLink> 
      {/* quando clicamos na pagina home , caso clicamos vamos colocar a classe está ativo , já quando não clicamos vai ter a classe está ativo */}
      <NavLink to="/about" className={({isActive}) =>(isActive ? "esta-ativo":" nao-ativo")}>Sobre</NavLink>
    </nav>
  )
}

export default NavBar

// NavLink: é um componente que estende o Link, adicionando funcionalidade para identificar quando o link está ativo, pendente ou em transição. Isso permite estilizar automaticamente seus links com base em seu status na aplicação

// isActive: indica se a rota está ativa.

// isPending: indica estados de pré-carregamento, útil com rotas Data/Framework
