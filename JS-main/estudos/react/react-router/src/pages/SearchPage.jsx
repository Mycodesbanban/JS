import { useSearchParams , Link } from "react-router-dom"

import { useFecth } from "../hook/useFetch"


const SearchPage = () => {
    // usando o useSearchParams para mudar ou ler o caminho da url
    let [BuscarParametros] = useSearchParams()

    // pegando o valor q da url
    const buscar = BuscarParametros.get("q")

    // definindo a url e quando buscar por item mudar automaticamente 
    const url= `http://localhost:3000/produtos?nome=${buscar}` 

    
    const {data:items , relogar , error} = useFecth(url)
    
  return (
    <div>
        <h1>Resultados disponiveis </h1>
           <ul className="produtos">
            {items && items.map(item => ( // caso os itens forem verdadeiro mostre o nome do item e o valor
              <li key={item.id}>
                <h2>{item.nome}</h2>
                <p>R$ {item.valor}</p>
                <Link to={`/produtos/${item.id}`}>Detalhes:</Link>
              </li>
            ))}
          </ul>
    </div>
  )
}

export default SearchPage