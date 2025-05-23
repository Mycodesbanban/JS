// css
import './App.css'
// react
import { useCallback , useEffect , useState } from 'react' // pesquisar
// dados/data
// quando formos fazer uma exportação nomeada , ou seja exportando uma variavel com o nome exato
import { wordsList } from './data/word' // então na hora que for importar precisamos usar o nome entre as chaves 
// componentes
import StartScrenn from './components/StartScrenn'
import Game from './components/Game'
import End from './components/End'

const stages =[ // definindo os estados dos jogos 
  {id:1 , name:"start"},
  {id:2 , name:"game"},
  {id:3 , name:"end" }
]

function App() {
  const [ gameStage , setGamestage] = useState(stages[0].name) // recebe o nome de cada estagio 
  const [ words] = useState(wordsList) // atribuindo a variavel que chamamos do arquivo
  console.log(words) // mostrando a variavel no console

  const [pickedWord , setPickedWord] = useState("") // guarda a palavra sortiada para o jogador adivinhar
  const [pickedCategorie , setPickedCategorie] = useState("") // guarda a cartegoria da palavra
  const [ letters , setLetters]= useState([]) // guarda as letras da palavras

  const[ guestLetters , setGuestLetters] = useState([]) // letras adivinhas 
  const [ wrongLetters , setWrogLetters] = useState([]) // letras erradas 
  const [ guesses , setGuesses] = useState(3) // chances do usuario
  const [ score , setScore] = useState(0) //pontos do usuario




  const pickWordCategory = () =>{
    // random category
    const categories =Object.keys(words) // pega as cartegorias do objeto words
    const caregory = categories[Math.floor(Math.random()*Object.keys(categories).length)] // vai sortiar uma cartegoria aleatoria

     console.log(caregory)

    // random word
    const word = words[caregory][Math.floor(Math.random()* words[caregory].length)] // vai sortiar uma palavra aleatoria dentro da cartegoria 

    console.log(word)

    return { word , caregory}

  }

  // start 
  const startGame = () =>{
    // uma função para a palvra que o jogador vai adivinha e uma catergoria
    const {word , caregory } = pickWordCategory()

    // criando um array de letras para a palavra sortiada
    let wordLetters = word.split("") // vai separar a palavra com todas as letras que tem
    wordLetters = wordLetters.map((l) => l.toLowerCase()) // vai percorrer o array e para cada letra do array ele vai transformar em minuscula
  
    console.log(wordLetters)

    console.log(word , caregory)

    // compontentes importante para o jogo

  setPickedWord(word) // atualiza o estado da palavra guardada
  setPickedCategorie(caregory) // atualizar o estado com a cartegoria sortiada
  setLetters(wordLetters) //atualizar um estado com todas as letras que foram sortiadas 

  setGamestage(stages[1].name)// vai retorna o nome game na tela 
  }

  // process the letter input
  const verifica = (letter) =>{
   const letterLower = letter.toLowerCase() // transforma a letra recebida em letra minuscula
  //  verifique se a letra já foi ultilizada
  if(guestLetters.includes(letterLower) || wrongLetters.includes(letterLower)){ // verifica se a letra já está sendo usadad correta e incorreta

    return
  }
  // tentativas do usuario
  if(letters.includes(letterLower)){ //se tiver correta adicionar ao array de letras adivinhadas
    setGuestLetters((atualguessestLetters) =>[
      ...atualguessestLetters , 
      letterLower
    ])
  }else{
     setWrogLetters((actualWroglettres) =>[ // se tiver erradas vai adicionar ao array de letras erradas
      ...actualWroglettres , 
      letterLower
    ])
  }

  }

  // restart the game 
  const retry = () =>{
    setGamestage(stages[0].name)
  }


   return (
    <>
      <div className='App'>
      {gameStage ==="start" && <StartScrenn startGame={startGame}/>} 
      {/* verifica se o valor de gameStage e start , caso for ele vai retorna o <StartScrenn/> */}
      {gameStage ==="game" && <Game verifica={verifica} pickedWord={pickedWord} pickWordCategory={pickWordCategory} letters={letters} guestLetters={guestLetters} guesses={guesses} wrongLetters={wrongLetters} score={score}/>}
      {/* implimentando para o game esses estagios */}
      {gameStage === "end" && <End retry={retry}/>}
      </div>
    </>
  )
}

export default App

// useCallback:é um hook do React que serve para memorizar uma função, ou seja, fazer com que ela não seja recriada a cada renderização, a menos que alguma de suas dependências mude , 
// const minhaFuncaoMemorizada = useCallback(() => {
//   // código da função
// }, [dependencias])
// () =>{} a função que você quer memorizar 
// [dependencias] lista de variaveis que , se mudarem , fazerem a função ser criada novamente 

// useEffect:permite executar efeitos colaterais em componentes funcionais
// /useEffect aceita dois argumentos:

// Uma função que executa o efeito.

// Um array opcional de dependências.

// Object.keys(): pega todas as chaves (nome da propriedade) de um objeto

//split(): divide um string em partes e devolve para um array
