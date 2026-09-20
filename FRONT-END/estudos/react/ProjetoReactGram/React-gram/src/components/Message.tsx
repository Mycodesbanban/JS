import "./Message.css"

import React from 'react'

interface Message {
    message:string ,
    type:"sucess"|"error"
}


const Message = ({message, type}:Message) => {
  return (
    <div>
      <div className={`message ${type}`}>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Message
