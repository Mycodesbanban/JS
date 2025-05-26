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



  const pickWordCategory = useCallback(() =>{
    // random category
    const categories =Object.keys(words) // pega as cartegorias do objeto words
    const caregory = categories[Math.floor(Math.random()*Object.keys(categories).length)] // vai sortiar uma cartegoria aleatoria

     console.log(caregory)

    // random word
    const word = words[caregory][Math.floor(Math.random()* words[caregory].length)] // vai sortiar uma palavra aleatoria dentro da cartegoria 

    console.log(word)

    return { word , caregory} // retornando um objeto com duas informações importante para o jogo

  } , [words]) // só recrie essa função se a variavel mudar

  // start 
  const startGame = useCallback(() =>{
    // limpar todas as letras
    clearLetras()


    // uma função para a palvra que o jogador vai adivinha e uma catergoria
    const {word , caregory } = pickWordCategory()

    // criando um array de letras para a palavra sortiada
    let wordLetters = word.split("") // vai separar a palavra com todas as letras que tem dentro do array
    wordLetters = wordLetters.map((l) => l.toLowerCase()) // vai percorrer o array e para cada letra do array ele vai transformar em minuscula
  
    console.log(wordLetters)

    console.log(word , caregory)

    // compontentes importante para o jogo

  setPickedWord(word) // atualiza o estado da palavra guardada
  setPickedCategorie(caregory) // atualizar o estado com a cartegoria sortiada
  setLetters(wordLetters) //atualizar um estado com todas as letras que foram sortiadas 

  setGamestage(stages[1].name)// vai retorna o nome game na tela 
  }, [pickWordCategory]) // só recrie a fução start se o pickWordCategory mudar 

  // process the letter input
  const verifica = (letter) =>{ // verifica a letra digitava para o usuario
   const letterLower = letter.toLowerCase() // transforma a letra recebida em letra minuscula
  //  verifique se a letra já foi ultilizada
  if(guestLetters.includes(letterLower) || wrongLetters.includes(letterLower)){ // verifica se a letra já está sendo usadad correta e incorreta

    return // evita gasta a tentativas e usar letras repetidas 
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
    setGuesses((atualguess) => atualguess - 1) // atualizar o estado de tentativas cada vez que eu erro
  }

  }

  // função para limpar as letras 
  const clearLetras = ()=>{
    setGuestLetters([]) // limpar o array de letras corretas 
    setWrogLetters([]) // limpar o array de letras erradas 
  }

// se as tentativas terminaram
  useEffect(() =>{  // vai observar as mudanças de algum estado
    if(guesses <=0){
      clearLetras(); // limpar as letras digitadas
      setGamestage(stages[2].name) // muda o estagio do jogo
    }
  } , [guesses]) // esse efeito só funcionar quando o valor de guesses (tentativas) mudar 


// se ganhamos o jogo
    useEffect(() =>{
      const letrasUnicas = [... new Set(letters)] // um array de letras unicas
      
    // condição de vitoria
    if(guestLetters.length === letrasUnicas.length && gameStage ==="game"){ 
      setScore((atualScore) => atualScore += 100)

    // começar o jogo novamente 
      startGame();
    
    }
    } , [guestLetters , letters , startGame])



  // restart the game 
  const retry = () =>{
    setScore(0) // reseta a pontuação do jogador
    setGuesses(3) // restaura as tentativas
    setGamestage(stages[0].name) // volta para o estagio inicial 
  }


   return (
    <>
      <div className='App'>
      {gameStage ==="start" && <StartScrenn startGame={startGame}/>} 
      {/* verifica se o valor de gameStage e start , caso for ele vai retorna o <StartScrenn/> */}
      {gameStage ==="game" && <Game verifica={verifica} pickedWord={pickedWord} pickedCategorie={pickedCategorie} letters={letters} guestLetters={guestLetters} guesses={guesses} wrongLetters={wrongLetters} score={score}/>}
      {/* implimentando para o game esses estagios */}
      {gameStage === "end" && <End retry={retry} score={score}/>}
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

// new set(): é uma estrutura de dados que armazena valores únicos de qualquer tipo, seja primitivo ou referência a objetos

//...: espalha os itens de algo — como de um array ou objeto — para usá-los separadamente.
