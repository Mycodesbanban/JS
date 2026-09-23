// import type React from "react"
import "./EditProfile.css"

import { upload } from "../../utils/config"
import { useState, useEffect  } from "react"
import { useSelector, useDispatch } from "react-redux"
import { profile, resetMessage, updateProfile} from "../../slices/userSlide"
import type { AppDispatch } from "../../store"
import Message from "../../components/Message"
import type { RootState } from "../../store"


const EditProfile = () => {

  const dispatch = useDispatch<AppDispatch>()
  const {user, message, error, loading} = useSelector((state: RootState) => state.user)

  const [name,setName] = useState<string>("")
  const [email , setEmail]= useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [profileImage, setProfileImage] = useState<File | null>("")
  const [bio, setBio] = useState<string>("")
  const [previewImage, setPreviewImage] = useState<File | null>(null)


  // load user
  useEffect(()=>{
    dispatch(profile())
  }, [dispatch])



  // acao que sera executada quando o formulario for enviado

  useEffect(() =>{
    if(user){
      setName(user.name)
      setEmail(user.email)
      setBio(user.bio)
    }
  }, [user])

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // pegar dados do usarios e colocar nos estados
        const userData= {
          name, 
          profileImage,
          bio,
          password

        }


        if(profileImage){
          userData.profileImage = profileImage
        }

        if(bio){
          userData.bio = bio
        }
        if(password) {
          userData.password = password
        }

        // criar um form data


        const formData = new FormData()

  Object.keys(userData).forEach((key) => {
    const value = userData[key]

    if (value) {
        formData.append(key, value)
    }
})

  await dispatch(updateProfile(formData))

        setTimeout(() => {
          dispatch(resetMessage())
        }, 2000)

    }
    const handleFile = (e:React.FormEvent<HTMLFormElement>)=>{
      // imagePreview

      const image = e.target.files[0]

      setPreviewImage(image)

      // atualizar o estado da imagem
      setProfileImage(image)

    }
  return (
    <div id="edit-profile">
      <h2>Edite Seus dados</h2>
      <p className="subtitle">adicione uma imagem de perfil e conte mais sobre voce...</p>

      {(user?.profileImage || previewImage )&&(
        <img src={previewImage ? URL.createObjectURL(previewImage) : `${upload}/users/${user?.profileImage}`} alt={user?.name} className="profile-image"/>
      )}
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} value={name} />
        <input type="email" placeholder="email" disabled />
        <label>
            <span>Imagem de perfil</span>
            <input type="file" onChange={(handleFile)} />
        </label>
        <label >
            <span>Bio:</span>
            <input type="text" placeholder="descricao do perfil"  onChange={(e) => setBio(e.target.value)} value={bio}/>
        </label>
        <label>
            <span>Quer alterar senha</span>
            <input type="password" placeholder="digite sua nova senha" onChange={(e) => setPassword(e.target.value)} value={password}/>
        </label>
         {!loading && <input type="submit" value="ATUALIZAR" />}
        {loading && <input type="submit" value="AGUARDE...." disabled />}
       {error && <Message message={error} type="error" />}
       {message && <Message message={message} type="sucess"/>}
      </form>
    </div>
  )
}

export default EditProfile
