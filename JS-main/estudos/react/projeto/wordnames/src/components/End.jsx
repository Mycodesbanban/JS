import "./End.css"

const End = ({retry , score}) => {
  return (
    <div>
        <h1>perdeu</h1>
        <h2>A sua pontuação foi de <span> {score}</span></h2>
        {/* mostrando a pontuação que fizemos enquanto jogamos  */}
        <button onClick={retry}>Tente novamente </button> 
        {/* quando clicar no botão vai resetar tudo */}
    </div>
  )
}

export default End