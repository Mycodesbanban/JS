import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Kwai from "./assets/c5a55ec0a38f65212d5047826e8d1ecc.jpg"
import ManageData from './components/manageData'
import ListRender from './components/ListRender'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Avançando no react</h1>
        {/* imagem em public */}
        <div>
    <img src="/c5a55ec0a38f65212d5047826e8d1ecc.jpg" alt="img" />
        </div>
        <div>
          {/* imagem em assets */}
      <img src={Kwai} alt="kwai" />
        <ManageData/>
        <ListRender/>      
        </div>
        
      </div>
    </>
  )
}

export default App
