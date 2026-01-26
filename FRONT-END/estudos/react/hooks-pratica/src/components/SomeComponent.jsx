import React from 'react'
import { forwardRef, useRef, useImperativeHandle } from 'react'

const SomeComponent =  forwardRef((props, ref) => { // referencia componentes
  const localInputRef = useRef()
  useImperativeHandle(ref, ()=>{
    return {validate:() =>{ // metodo que vai ser retornando no elemento pai
      if(localInputRef.current.value.length > 3){
        localInputRef.current.value = ""
      }
    }}
  })

  return (
    <div>
        <h2>Some O Componente</h2>
        <p>Insira no maximo 3 caracteres</p>
        <input type="text" ref={localInputRef}/>
    </div>
  )
})

export default SomeComponent