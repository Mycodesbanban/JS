import { useState , useRef } from "react";
import "./Game.css";

const Game = ({ verifica , pickedWord ,pickWordCategory , letters , guestLetters , guesses  , wrongLetters , score}) => {


  const [letter , setLetter] =useState("") 
  const letterInputRef = useRef(null) // cria uma referencia nula para o elemento dom


  const handleSubmit = (e) =>{
    e.preventDefault(); // evitar o comportamento padrão do navegador
    verifica(letter) // verifica se a letra está errada ou correta
    setLetter(""); // quando a gente jogar ele vai apagar 
    letterInputRef.current.focus(); // Coloca o cursor de volta no input automaticamente 
  }
  return (
    // criando o game e os pontos 
    <div className="game"> 
    {/* definindo a div principal com a classe game */}
      <p className="pontos">
        {/* definindo o paragrafo com a classe pontos */}
        <span>pontuação:{score}</span>
        {/* pontuação */}
      </p>
      <h1>adivinhe a palavra:</h1> 
      <h3 className="dica">
        <p>você ainda tem {guesses} tentativas </p> 
        {/* atribuindo para o h3 a classe dica */}
        dica sobre a palavra: <span>{pickWordCategory}</span>
      </h3>
      <div className="letras_exibidas">
        {/* criando uma div para mostra quais letras serão exibidas */}
       {letters.map((letter , i) =>( // para cada letra dentro do array letters fazemos um mapeamento pegando a palavra e seu indice 
        guestLetters.includes(letter) ? ( // se a letra tiver incluida vai mostrar na tela 
          <span key={i} className="letter">{letter}</span>
        ):(
          <span key={i} className="blankSquare"></span> // caso não tiver vai retornar um quadrado branco
        )
       ))}
      </div>
      <div className="conteiner_de_letras">
        {/* criando uma classe com o um conteiner de palavras  */}
        <p>tente adivinhar uma letra da palavra</p>
        <form onSubmit={handleSubmit}>
          <input 
          type="text" // tipo texto 
          name="letter" // o nome e letter
          maxLength="1" // define que o maximo de caracteres é 1
          required // precisa escrever algo para enviar
          onChange={(e) => setLetter(e.target.value)} // atualizar o valor da letra com o valor digitado
          value={letter} //define o valor do input com a letra
          ref={letterInputRef} // conectar essa referencia ao um campo de input
          />
          <button>Enviar</button> 
          {/* para envia as letras */}
        </form>
      </div>
      <div className="letras_Ja_ultilizadas">
        {/* criando uma div com a classe de letras que já foram ultilizadas */}
        <p>letras já ultilizadas:</p>
       {wrongLetters.map((letter , i) =>( 
        <span key={i}>{letter}</span> // se a letra já tiver sido usada ou está errada ele vai mostra 
       ))}
      </div>
    </div>
  );
};

export default Game;

// maxLength(): quantidade maxima de caractres que pode digitar 

//includes(): verificar se algum elemento ou variavel está incluido

// useRef:

// focus();

// .current:
