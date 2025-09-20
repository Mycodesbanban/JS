import { useParams , Link } from "react-router-dom"
  //5-carregamento de dados individual
import { useFecth } from "../hook/useFetch" 



const Produto = () => {

    //4-Rota dinamica
    const {id} = useParams() // destruturando o id

    //5-carregamento de dados individual
    const url = "http://localhost:3000/produtos/" + id // definindo a url e juntando com o id 
    const {data:produto , relogar , error} = useFecth(url) // pegando os item do useFeacth e colocando na url que acabamos de criar 

    console.log(produto)

  return (
    <div>
       <p>Id do produto :{id}</p>
       
    {/* 5-carregamento de dados individual */}
    {/* se tiver erro , imprimar esse paragrafo */}
       {error && <p>{error}</p>} 
    {/* se estivir carregando , imprimar esse paragrafo */}
        {relogar && <p>{relogar}</p>}
    {/* vai imprimir os dados do produto  */}
        {produto && (
            <div>
                <h1>
                    {produto.nome}
                </h1>
                <p>{produto.valor}</p>
                {/* 6-nested routes */}

                {/* criando o link de navegação e a url de informações do produto */}
                <Link to={`/produtos/${produto.id}/info`}>Mais informações</Link> 
                {/* no app.jsx:
                    <Route path='/produtos/:id/info' element={<Info/>}></Route> defininfo a rota do info e qual pagina abrir
                     
                     
                    Na pagina info:
                    import { useParams } from "react-router-dom" // importando o useParams
                              const Info = () => {
                                  const {id} = useParams() // pegando o id do parametro
                                return (
                                  <div>
                                      <h1>
                                          Mais informações sobre o produto {id} retornando o id 
                                      </h1>
                                  </div>*/}
                

            </div>
        )}  
    </div>
  )
}

export default Produto


// no app.jsx
// importando o produto 
// import Produto from './pages/Produto'

// Rotas dinâmicas

/* <Route path='/products/:id' element={<Produto/>}></Route>*/ // indicando uma URL com um parametro dinamico


// No Home:
//  <Link to={`/produtos/${item.id}`}>Detalhes:</Link>  // ao clicar no link , vai ser levando ao parametro do item que você clicou 


// useParams():  serve para acessar os parâmetros dinâmicos da URL atual de forma simples e prática. Em outras palavras, quando você define uma rota com um segmento variável, como :postId ou :userId, o useParams retorna um objeto com esses parâmetros e seus valores extraídos da URL


