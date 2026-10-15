import "./Search.css"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useResetMessage } from "../../hooks/useResetMessage"
import { BsSearch } from "react-icons/bs"
import LikeContainer from "../../components/LikeContainer"
import PhotoItem from "../../components/PhotoItem"
import { Link } from "react-router"
import { useQuery } from "../../hooks/useQuery"

import { searchPhotos, like } from "../../slices/profileSlice"
import type { RootState } from "../../store"


const Search = () => {
    const query = useQuery()
    const search = query.get("q")

    const dispatch = useDispatch()

     const resetMessage = useResetMessage(dispatch)

     const {user} = useSelector((state:RootState) => state.auth)
     const {photos, loading} = useSelector((state:RootState) => state.photo)

     useEffect(() => {
      dispatch(searchPhotos(search))
     }, [dispatch, search])

      const handleLike = (photo) => {
      dispatch(like(photo._id))
      resetMessage()
    }

    if(loading){
    return  <p>carregando</p>
    } 


  return (
    <div>

    <div id="search">
      <h2>Voce esta buscando por:{search}</h2>
      {photos && photos.map((photo) => (
         <div key={photo._id}>
          <PhotoItem photo={photo}/>
        <LikeContainer photo={photo} user={user} handleLike={handleLike}/>
        <Link to={`/photos/${photo._id}`} className="btn">Ver mais</Link>
          </div>
          
      ))}
      {!loading &&photos && photos.length ===0 && (
        <h2 className="no-photos">Nao foi encontrado nenhuma postagem</h2>
      )}
    </div>



    </div>
  )
}

export default Search
