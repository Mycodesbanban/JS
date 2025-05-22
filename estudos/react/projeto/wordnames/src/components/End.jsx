import "./End.css"

const End = ({retry}) => {
  return (
    <div>
        <h1>perdeu</h1>
        <button onClick={retry}>Tente novamente </button> 
        {/* quando clicar no botão vai resetar tudo */}
    </div>
  )
}

export default End