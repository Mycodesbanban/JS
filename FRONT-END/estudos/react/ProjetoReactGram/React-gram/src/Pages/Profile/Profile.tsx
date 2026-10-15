import "./Profile.css"
import type { RootState } from "../../store"
import { upload } from "../../utils/config"
import { publishPhoto, resetMessage, getUserPhoto, deletePhoto, editPhoto} from "../../slices/profileSlice"

import type { AppDispatch } from "../../store"

import Message from "../../components/Message"
import { Link } from "react-router-dom"

import { BsFillEyeFill, BsPencilFill, BsXLg } from "react-icons/bs"

import { useState, useEffect, useRef } from "react"

import { useSelector,useDispatch } from "react-redux"

import { useParams } from "react-router-dom"

import { getUserDetails } from "../../slices/userSlide"

const Profile = () => {
    const {id} = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const {user, loading} = useSelector((state:RootState) => state.user)
    const {user:userAuth} = useSelector((state:RootState)=> state.auth)
    const {photos, loading:loadingPhoto, message:messagePhoto, error:errorPhoto} = useSelector((state:RootState)=> state.photo)
    const [title, setTitle] = useState("")
    const [image, setImage] = useState<File | null>()
    const [editTitle, setEditTitle] = useState("")
    const [editImage, setEditImage] = useState("")
    const [EditId, setEditId] = useState("")
    // photo
    const newPhotoForm = useRef()
    const editPhotoForm = useRef()
    // carregar usuario 
    const handleFile = (e: React.ChangeEvent<HTMLInputElement>)=>{
      // imagePreview

      const image = e.target.files?.[0]



      // atualizar o estado da imagem
      setImage(image)

    }
    useEffect(() => {
        dispatch(getUserDetails(id))
        dispatch(getUserPhoto(id))
    },[dispatch, id])

    if(loading){
        return <p>carregando</p>
    }
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        const photoData = {
            title, 
            image 
        }
        const formData = new FormData()

        const photoFormData = Object.keys(photoData).forEach((key) => formData.append(key, photoData[key]))
        formData.append("photo", photoFormData)

        dispatch(publishPhoto(formData))

        setTitle("")

        setTimeout(() => { 
            dispatch(resetMessage())
        })
    }   

    function resetComponetsMessage ()  {
        setTimeout(() => {
            dispatch(resetMessage())
        }, 2000)
    }


    const handleDelete = async (id) => {
        await dispatch(deletePhoto(id))
        resetComponetsMessage()
    }

    const hideOrShowForms  = () => {
        newPhotoForm.current.classList.toggle("hide")
        editPhotoForm.current.classList.toggle("hide")
    }
    const handleUpdate = async(e) => {
        e.preventDefault()
        const photoData = {
            title:editTitle,
            id:EditId
        }
       await dispatch(editPhoto(photoData))
        resetComponetsMessage()



    }
    const handleEdit = (photo) => {
        if(editPhotoForm.current.classList.contains("hide")){
            hideOrShowForms()
        }
        setEditId(photo._id)
        setEditImage(photo.image)
        setEditTitle(photo.title)
    }
    const handleCancelEdit = () => {
        hideOrShowForms()
    }


  return (

    <div id="profile">
      <div className="profile-header">

    {user && "profileImage" in user && user.profileImage && (
        <img
            src={`${upload}/users/${user.profileImage}`}
            alt={user.name}
        />
    )}

    <div className="profile-description">
        {user && "name" in user && (
            <h2>{user.name}</h2>
        )}

        {user && "bio" in user && (
            <p>{user.bio}</p>
        )}
    </div>

</div>

        {id === userAuth._id && (
           <>
           <div className="new-photo" ref={newPhotoForm}>
                <h3>Compartilhe algum momento seu</h3>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Titulo pra sua postagem:</span>
                        <input type="text" placeholder="insirar seu titulo" onChange={(e) => setTitle(e.target.value)} value={title}/>
                    </label>
                    <label>
                    <span>Imagem:</span>
                    <input type="file" onChange={handleFile}/>
                    </label>
                    {!loadingPhoto && <input type="submit" value="postar"/>}
                    {loadingPhoto && <input type="submit" value="aguarde..." disabled/>}
                </form>
           </div>

            <div className="edit-photo hide" ref={editPhotoForm}>
                    <p>editando:</p>
                    {editImage && (
                        <img src={`${upload}/photos/${editImage}`} alt={editTitle}/>
                    )}
                    <form onSubmit={handleUpdate}>
                        
                    <input type="text" onChange={(e) => setEditTitle(e.target.value)} value={editTitle}/>
                    
                     <input type="submit" value="atualizar" />
                     <button className="cancel-btn" onClick={handleCancelEdit}>Cancelar edicao</button>
                    </form>
            </div>
           

           {errorPhoto && <Message message={errorPhoto} type="error" /> }
           {messagePhoto && <Message message={messagePhoto} type="sucess"  />}
           </>
        ) }
        <div className="user-photos">
            <h2>Fotos Publicadas:</h2>
            <div className="photos-container">
        {photos && photos.map((photo) => (
            <div className="photo" key={photo._id}>
                
                {photo.image && (
                    <img
                        src={`${upload}/photos/${photo.image}`}
                        alt={photo.title}
                    />
                )}

                {id === userAuth?._id ? (
                    <div className="actions">
                        <Link to={`/photos/${photo._id}`}>
                        <BsFillEyeFill/>
                        </Link>
                        <BsPencilFill onClick={() => handleEdit(photo) }/>
                        <BsXLg onClick={() => handleDelete(photo._id)}/>
                    </div>
                ) : (
                    <Link
                        to={`/photos/${photo._id}`}
                        className="btn"
                    >
                        Ver perfil
                    </Link>
                )}
                    </div> 
                ))}
                {photos.length === 0 && <p> ainda nao ha imagem</p>}
            </div>
        </div>
      </div>
  )
}

export default Profile
