import "./Photo.css"
import { upload } from "../../utils/config"
import Message from "../../components/Message"
import { getPhotoById, like, comments } from "../../slices/profileSlice"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useResetMessage } from "../../hooks/useResetMessage"

import type { RootState } from "../../store"
// redux
import PhotoItem from "../../components/PhotoItem"
import LikeContainer from "../../components/LikeContainer"

const Photo = () => {

  const {id} = useParams()

  const dispatch = useDispatch()
   const resetMessage = useResetMessage(dispatch)

  const user = useSelector((state:RootState) => state.auth)

  const {photo, loading, error, message  } = useSelector((state:RootState) => state.photo)


  // comentarios

  const [comment, setCommments] = useState("")
  



  // load photo data

  useEffect(() => {
    dispatch(getPhotoById(id))
  }, [dispatch , id])


  // like and comments 


  const handleLike = () => {
    dispatch(like(photo?._id))
    resetMessage()
  }


  const handleComments = (e) => {
    e.preventDefault()
    const photoData = {
      comments:comment,
      id:photo._id
    }
    dispatch(comments(photoData))
    setCommments("")
  }


  if(loading){
    <p>carregando</p>
  }
if (error) return <p>{error}</p>
if (!photo) return <p>Foto não encontrada</p>



  return (
    <div id="photo">
      <PhotoItem photo={photo}/>
      <LikeContainer photo={photo} user={user} handleLike={handleLike}/>
      <div className="message-conatiner">
        {error && <Message message={error} type="error"/>}
        {message && <Message message={message} type="sucess"/>}
      </div>
      <div className="comments">
    {photo.comments && (
      <>
           <h2>Comentarios:({photo.comments.length})</h2>
    <form onSubmit={handleComments}>
      <input type="text" placeholder="insira seu comentario" onChange={(e) => setCommments(e.target.value)} value={comment} />
      <input type="submit" value="enviar" />
    </form>
    {photo.comments.length === 0 && <p>Nao existem comentarios ainda</p>}
    {photo.comments.map((comt) => (
    <div className="comment" key={comt._id || comt.comments}>
        <div className="author">
            {comt.userImage && (
                <img
                    src={`${upload}/users/${comt.userImage}`}
                    alt="Imagem do usuário"
                />
            )}

            <Link to={`/users/${comt.userId}`}>
                <p>{comt.userName}</p>
            </Link>
        </div>

        <p>{comt.comments}</p>
    </div>
))}
      </>
    )}
      </div>
    </div>
  )
}

export default Photo
