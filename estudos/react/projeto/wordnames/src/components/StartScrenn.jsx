import "./StartScreen.css"

function StartScrenn({startGame}) {
  return (
    <div className="Screen_Game"> 
        <h1>Secret Word</h1>
        <p>Clique no botão abaixo</p>
        {/* definindo o botão para começar o jogo */}
        <button onClick={startGame}>começar o jogo</button> 
        {/* quando o usuario der um clique nesse botão vai executar a função startGame , onde vai executar o jogo */}
    </div>
  )
}

export default StartScrenn

// &&: significa um e logico , sinatxe: 
// Se isLoggedIn for true, o <p> será renderizado.
// se for false não sera renderizado