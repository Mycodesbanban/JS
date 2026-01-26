import React from 'react'
import { useLayoutEffect, useEffect, useState} from 'react'

const HookUseLayoutEffect = () => {
    const [name, setName] = useState("algum nome com valor")
    useEffect(()=>{
        console.log("2")
        setName("mudou de novo")
    }, [])
    useLayoutEffect(()=>{
        console.log("")
        setName("maycon")
    }, [])

    console.log(name)
    
  return (
    <div>
        <h2>LayoutEffect</h2>
        <p>nome:{name}</p>
        <hr />
    </div>
  )
}

export default HookUseLayoutEffect