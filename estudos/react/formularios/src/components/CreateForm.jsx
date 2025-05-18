import "./CreateForm.css"
const CreateForm = () => {
  return (
    <div>
        <form>
            <div>
                <label htmlFor="name"nome>Nome:</label>
                <input type="text" name="name" placeholder="digite seu nome"/> 
                {/* criando um campo de texto que vai receber o label que decreve o que é para fazer nesse campo , e temos o htmlFor  , ele é igual o for so que estamos usando react então temos que usar o htmlFor*/}
            </div>
            <label >
              <span>email</span>
              <input type="email" name="email" placeholder="digite seu email" />
            </label>
            <input type="submit" value="enviar" /> 
            {/* criando um botão para enviar os dados */}
        </form>
    </div>
  )
}

export default CreateForm