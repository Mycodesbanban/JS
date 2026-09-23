import "./Profile.css"
import type { RootState } from "../../store"
import { upload } from "../../utils/config"
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


    // photo

    // carregar usuario 
    useEffect(() => {
        dispatch(getUserDetails(id))
    },[dispatch, id])

    if(loading){
        return <p>carregando</p>
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

        
      </div>
  )
}

export default Profile
