import "./Message.css"
import { useEffect, useState} from "react"
import React from 'react'

interface Message {
    message:string ,
    type:"sucess"|"error"
}


const Message = ({message, type}:Message) => {
  const [visible, setVisible] = useState(true)

 useEffect(() => {
        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [message])

    if (!visible) return null
  return (

    <div>
      <div className={`message ${type}`}>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Message
