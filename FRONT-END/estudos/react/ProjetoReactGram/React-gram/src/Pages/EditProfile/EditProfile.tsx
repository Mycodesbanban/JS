// import type React from "react"
import "./EditProfile.css"

import { upload } from "../../utils/config"
import { useState, useEffect  } from "react"
import { useSelector, useDispatch } from "react-redux"
import { profile, resetMessage} from "../../slices/userSlide"
import Message from "../../components/Message"
import type { RootState } from "../../store"


const EditProfile = () => {

  const dispatch = useDispatch()
  const {user, message, error, loading} = useSelector((state: RootState) => state.user)

  // states 


  // load user
  useEffect(()=>{
    dispatch(profile())
  }, [dispatch])

  console.log(user)

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

  return (
    <div id="edit-profile">
      <h2>Edite Seus dados</h2>
      <p className="subtitle">adicione uma imagem de perfil e conte mais sobre voce...</p>
      {/* preview image */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" disabled />
        <label>
            <span>Imagem de perfil</span>
            <input type="file" />
        </label>
        <label >
            <span>Bio:</span>
            <input type="text" placeholder="descricao do perfil" />
        </label>
        <label>
            <span>Quer alterar senha</span>
            <input type="password" placeholder="digite sua nova senha" />
        </label>
        <input type="submit" value="atualizar"/>
      </form>
    </div>
  )
}

export default EditProfile
