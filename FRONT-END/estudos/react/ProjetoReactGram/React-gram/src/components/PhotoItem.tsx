import "./PhotoItem.css"

import { upload } from "../utils/config"
import { Link } from "react-router"

import React from 'react'

const PhotoItem = ({photo}) => {
    if (!photo) return null
  return (

    <div className="photo-item">
      {photo.image && (
        <img src={`${upload}/photos/${photo.image}`} alt={photo.title} />
      )}
      <h2>{photo.title}</h2>
      <p className="photo-author">
        publicada por: <Link to={`users/${photo.userId}`}>{photo.userName}</Link>
      </p>
    </div>
  )
}

export default PhotoItem
