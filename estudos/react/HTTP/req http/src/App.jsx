import { useState , useEffect  } from 'react' // importando o useSate e o useEffect
import './App.css' // chamando o estilo
import { useFecth } from './hook/useFetch'

const url = "http://localhost:3000/produtos" // a url
function App() {
  const [ produtos , setProdutos] = useState([])  // começa como um array vazio 
  const {data : items , httpConfiguracao , relogar , error} = useFecth(url)
 

  // adicionando dados 
  const [nome , setNome] = useState("") 
  const [valor , setValor] = useState("")


  // resgatando dados -01
  
  // useEffect(()=>{ 
  //   const featchDate = async () =>{ // função assicrona que buscar os dados da api
  //     const res = await fetch(url) // espera a resposta antes de continuar , e faz uma requisição get para a url
  
  //     const data = await res.json() // aguarda a resposta ser convertida para um objeto JS 
  
  //     setProdutos(data) // passa a resposta convertida para atualizar o estado do produtos
  //   }
  //   featchDate() // chama a função que buscar os dados 
  // } , []) // o array vazio indica que o efeito deve rodar apenas uma vez a menos que seja mudado 
// Adicionando dados -02
  const handleSubmit = async (e) =>{
    e.preventDefault() // não deixa o comportamento padrão dos navegadores
    const produto = {
      nome:nome, //
      valor:valor , 

    }
    // const res = await fetch (url , {  // faz a requisção http e aguarda a resposta com o await
    //   method:"POST" , // mudando o metodo para POST
    //   headers:{ // cabeçalho da requisição
    //     "Content-Type":"application/json" // diz ao servidor que está em conteudo json
    //   } , 
    //   body:JSON.stringify(produtos), // transformar um Json em um objeto jS 
    // }) 
    // // 3- carregamento dinamico

     const adicionarProduto = await httpConfiguracao(produto , "POST") // espera uma resposta do servidor e converte para um objeto js

   
 setProdutos((verProdutos) =>[...verProdutos , adicionarProduto ]) // ver a lista antiga e pega todos os seus produtos antigos e os produtos novos nesse novo array
    setNome("")
    setValor("")
    // json():converte um json para um objeto js
  }

  const handlDelete =(id) => {
    httpConfiguracao(id , "DELETE")
  }

  return (
    <>
      <div className='App'>       
        <h1>lista de produtos</h1>  
        {/* loading */}
        {relogar && <p>carregando dados </p>}
        {error && <p>{error}</p>}
       { !relogar && <ul>
          {items && items.map((produto) => ( // está percorrendo o array produtos , e para cada produto encontrado ele vai retorna dentro da lista cada um deles
            <li key={produto.id}>{produto.nome} - R${produto.valor}
            <button onClick={() => handlDelete(produto.id)}>apague</button>
            </li>
          ))}
        </ul> }
        <div className='estiloDiv'>
          <form onSubmit={handleSubmit}> 
            {/* quando clicar no botão de enviar ele vai chamar a função handleSubmit  */}
            <label>
              Nome:
              <input type="text" value={nome} name="nome" onChange={(e) => setNome(e.target.value)} /> 
              {/* pega o valor do elemento html que disparou o evento */}
            </label>
            <label>
              Preço:
              <input type="number" value={valor} name="valor" onChange={(e) => setValor(e.target.value)} />
              {/* pega o valor do elemento html que disparou o evento */}
            </label>
            {/* 7-state de loading no post */}
            {!relogar && <input type="submit" value="Criar" />}  
            {/* se relogar for falso ele vai exibir o botão */}

          </form>
        </div>

      </div>
    </>
  )
}

export default App
