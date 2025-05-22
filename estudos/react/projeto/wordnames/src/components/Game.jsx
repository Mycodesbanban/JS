import "./Game.css"

const Game = ({verifica}) => {
  return (
    <div>
        <h1>game</h1>
        <button onClick={verifica}>Finalizar jogo</button>
        {/* finalizar o jogo */}
    </div>
  )
}

export default Game