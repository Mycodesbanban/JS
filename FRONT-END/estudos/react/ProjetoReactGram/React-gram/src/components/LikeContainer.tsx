import React from 'react'
import "./LikeContainer.css"

import {BsHeart, BsHeartFill} from "react-icons/bs"
import "./LikeContainer.css"


const LikeContainer = ({ photo, user, handleLike }) => {
  const userId = user?._id || user?.user?._id

  return (
    <div className="like">
      {photo.likes && (
        <>
          {userId && photo.likes.includes(userId) ? (
            <BsHeartFill />
          ) : (
            <BsHeart onClick={() => handleLike(photo)} />
          )}

          <p>{photo.likes.length} like(s)</p>
        </>
      )}
    </div>
  )
}

export default LikeContainer


