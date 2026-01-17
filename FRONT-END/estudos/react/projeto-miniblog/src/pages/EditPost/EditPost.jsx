import styles from "./EditPost.module.css"
import { useState , useEffect } from "react"
import {useNavigate , useParams} from  "react-router-dom"
import {useAuthValue} from "../../context/AuthContext"
import { useUpdateDocument } from "../../hooks/UseUpdateDocument"
import {useFetchDocument} from "../../hooks/useFetchDocument"





function Editpost() {

  const {id} = useParams()
  const {document:post} = useFetchDocument("posts", id)
  

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body , setBody] = useState("")
  const [tags , setTags] = useState("")
  const [formError , setFormError] = useState("")
  useEffect(() =>{
    if(post){
      setTitle(post.title)
      setBody(post.body)
      setImage(post.image)

      const textTags = post.tagsArray.join(",")
      setTags(textTags)
    }
  },[post])


  const {updateDocument, response} = useUpdateDocument("posts")
  const {user} = useAuthValue()
  const navigate = useNavigate()
  useEffect(() => {
    if(response.error) {
      setFormError(response.error)
    }
  }, [response.error])


  const handleSumbit = (e) =>{
      e.preventDefault();
      setFormError("")
      // Validar Url da imagem
      try{
        new URL(image);
        
      } catch(error) {
        setFormError("A imagem precisa ser uma URL")
      }

      // criar um array de tags 
      const tagsArray = tags.split(",").map((tag)=> tag.trim().toLowerCase()).filter(tag => tag !== "")

      // validar se existe pelo menos uma tag
       if(tagsArray.length === 0) {
      setFormError("Por favor insira pelo menos uma tag")
      return
    }
      // checar todos os valores 

      if(!title || !image || !tags || !body){
        setFormError("Por favor prencha todos os campos acima")
      }

      if(formError) return;


      const data = {
         title,
        image,
        body,
        tagsArray,
        uid:user.uid,
        createdBy:user.displayName
      }



      updateDocument(id, data)
      // redirect home pags
      
  }
   useEffect(() => {
    if(!response.loading && response.payload) {
      navigate("/dashboard")
    }
  }, [response.loading, response.payload, navigate])


  return (
    <div className={styles.edit_post}>
      <h1>Edite seu Post: {post && post.title}</h1>
      <p>edite seu post, os usarios novos nao saberam das modificacoes </p>
      {post && (
        <>
        
           <form onSubmit={handleSumbit} >
    
    <label>
    <span>Titulo:</span>
    <input type="text" required name="title" placeholder="Digite o titulo de sua postagem" onChange={(e) => setTitle(e.target.value)} value={title}/>
    </label>
    <label>
    <span>URL Da imagem:</span>
    <input type="text" required name="image" placeholder="insira uma imagem que represente seu post" onChange={(e) => setImage(e.target.value)} value={image}/>
    </label>
    <p className={styles.preview_title}>Preview da imagem atual:</p>
    <img className={styles.imagePreview} src={post.image} alt={post.title}/>
        <label>
    <span>Conteudo:</span>
    <textarea type="text" required name="body" placeholder="insira uma imagem que represente seu post" onChange={(e) => setBody(e.target.value)} value={body}></textarea>
    </label>
    <label>
    <span>tags:</span>
    <input type="text" required name="tags" placeholder="insira as tags separadas por virgula" onChange={(e) => setTags(e.target.value)} value={tags}/>
    </label>

     {  !response.loading && <button className='btn'>Editar</button>}
     {  response.loading && <button className='btn'>aguarde</button>}
      {response.error && <p className='error'>   
      {response.error} </p>}
      {formError&& <p className='error'>   
      {formError} </p>}
    </form>
    </>
      )}
      
    </div>
  )
}

export default Editpost
