import styles from "./Createpost.module.css"
import { useState } from "react"
import {useNavigate} from  "react-router-dom"
import {useAuthValue} from "../../context/AuthContext"
import { useInsertDocument } from "../../hooks/useInsertDocument"
function Createpost() {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body , setBody] = useState("")
  const [tags , setTags] = useState([])
  const [formError , setFormError] = useState("")
  const {insertDocument, res} = useInsertDocument("posts")
  const {user} = useAuthValue()

  const handleSumbit = (e) =>{
      e.preventDefault();
      setFormError("")
      // Validar Url da imagem

      // criar um array de tags 

      // checar todos os valores 

      insertDocument({
        title,
        image,
        body,
        tags,
        uid:user.uid,
        create:user.displayName
      })
      // redirect home pags
      
  }


  return (
    <div className={styles.create_post}>
      <h1>Crie seu Post para outros usarios ver</h1>
      <p>Escreva sobre o que quiser e compatilhe seu conhecimento!</p>
    <form onSubmit={handleSumbit} >
    
    <label>
    <span>Titulo:</span>
    <input type="text" required name="title" placeholder="Digite o titulo de sua postagem" onChange={(e) => setTitle(e.target.value)} value={title}/>
    </label>
    <label>
    <span>URL Da imagem:</span>
    <input type="text" required name="image" placeholder="insira uma imagem que represente seu post" onChange={(e) => setImage(e.target.value)} value={image}/>
    </label>
        <label>
    <span>Conteudo:</span>
    <textarea type="text" required name="body" placeholder="insira uma imagem que represente seu post" onChange={(e) => setBody(e.target.value)} value={body}></textarea>
    </label>
    <label>
    <span>tags:</span>
    <input type="text" required name="tags" placeholder="insira as tags separadas por virgula" onChange={(e) => setTags(e.target.value)} value={tags}/>
    </label>

     {  !res.loading && <button className='btn'>Cadrastar</button>}
     {  res.loading && <button className='btn'>aguarde</button>}
      {res.error && <p className='error'>   
      {res.error} </p>}
    </form>
    </div>
  )
}

export default Createpost
