import { useState , useEffect  } from 'react' // importando o useSate e o useEffect
import './App.css' // chamando o estilo

function App() {
  const [ produtos , setProdutos] = useState([])  // começa como um array vazio 

  const url = "http://localhost:3000/produtos" // a url

  // resgatando dados -01
  
  useEffect(()=>{ 
    const featchDate = async () =>{ // função assicrona que buscar os dados da api
      const res = await fetch(url) // espera a resposta antes de continuar , e faz uma requisição get para a url
  
      const data = await res.json() // aguarda a resposta ser convertida para json
  
      setProdutos(data) // passa a resposta convertida para atualizar o estado do produtos
    }
    featchDate() // chama a função que buscar os dados 
  } , []) // o array vazio indica que o efeito deve rodar apenas uma vez a menos que seja mudado 
  console.log(produtos) // mostra para o console



  return (
    <>
      <div className='App'>       
        <h1>lista de produtos</h1>  
        <ul>
          {produtos.map((produto) => ( // está percorrendo o array produtos , e para cada produto encontrado ele vai retorna dentro da lista cada um deles
            <li key={produto.id}>{produto.nome} - R${produto.valor}</li>
          ))}
        </ul> 
      </div>
    </>
  )
}

export default App
