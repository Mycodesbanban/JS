import "./Button.css"

const Button = (props) => {
  return (
    <button
      className={`
        button
        ${props.operation ? "operation" : ""}
        ${props.double ? "double" : ""}
        ${props.triple ? "triple" : ""}
      `}
      onClick={() => props.click && props.click(props.label)} // ✅ Correção: agora só executa no clique
    >
      {props.label}
    </button>
  )
}

export default Button