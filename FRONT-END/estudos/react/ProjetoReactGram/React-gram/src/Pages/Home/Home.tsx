import "./Home.css"


import LikeContainer from "../../components/LikeContainer"
import PhotoItem from "../../components/PhotoItem"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useResetMessage } from "../../hooks/useResetMessage"
import { getAllPhoto, like } from "../../slices/profileSlice"
import type { RootState } from "../../store"

const Home = () => {
  const dispatch = useDispatch()
  const resetMessage = useResetMessage(dispatch)
  const user = useSelector((state:RootState) =>state.auth)

  const {photos, loading} = useSelector((state:RootState) => state.photo)

  useEffect(() => {
    dispatch(getAllPhoto())
  }, [dispatch])
// like a photo

    const handleLike = (photo) => {
      dispatch(like(photo._id))
      resetMessage()
    }

    if(loading){
    return  <p>carregando</p>
    } 

  return (
    <div id="home">
      {photos && photos.map((p) => (
        <>
        <div key={p._id}>
          <PhotoItem photo={p}/>
        <LikeContainer photo={p} user={user} handleLike={handleLike}/>
        <Link to={`/photos/${p._id}`} className="btn">Ver mais</Link>
          </div>
        </>
      ))}
      {!loading &&photos && photos.length ===0 && (
        <h2 className="no-photos">Nenhuma foto postada, seja o primeiro a postar</h2>
      )}
    </div>
  )
}

export default Home
