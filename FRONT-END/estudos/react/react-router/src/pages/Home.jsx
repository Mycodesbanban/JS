// importando
import{Link} from "react-router-dom"
import { useFecth } from "../hook/useFetch"
// importando css
import "./Home.css"

const Home = () => {
    // 3-carregamento de dados
    const url = "http://localhost:3000/produtos" // defindindo a url

  const {data:items , loading , error} = useFecth(url) // puxando os itens do useFeacth que criamos , e renomeando o dados(data) para item

  return (
    <div className='style'>
        <h1>
          produtos:
        </h1>
          {/* caso tenha um erro vai mostra esse paragrafo */}
          {error && <p>Ocorreu um erro na exebição de produtos por favor tente novamete </p>} 

          <ul className="produtos">
            {items && items.map(item => ( // caso os itens forem verdadeiro mostre o nome do item e o valor
              <li key={item.id}>
                <h2>{item.nome}</h2>
                <p>R$ {item.valor}</p>

                {/* 4-rotas dinamicas  */}
                <Link to={`/produtos/${item.id}`}>Detalhes:</Link>
              </li>
            ))}
          </ul>
    </div>
  )
}

export default Home