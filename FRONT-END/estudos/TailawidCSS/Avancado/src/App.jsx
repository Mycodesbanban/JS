import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <div className="text-white bg-red-900 w-full h-full">
      <h1>PT e gay</h1>

      {/* Limitacoes de textos tailwind */}

      <div className='border-2 w-96'> {/* limita o texto em 384px  */}
        <p className='whitespace-nowrap overflow-hidden text-ellipsis'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id tenetur accusantium, velit nulla ratione eum possimus perferendis odio nesciunt adipisci ipsam iste facere soluta corporis laboriosam aperiam dolores et? Accusantium.</p> {/* aqui falamos o seguinte que o texto nao vai quebrar de linha, se quebrar tire a parte que quebrou e se tiver continuacao coloco etc */}
      </div>
      <p className='whitespace-pre-wrap leading-8'> {/* aqui vai respeitar se afastamos ou justamos paragrafos e o afastamento da linha */}
      roludo 

      cabeca de bonitin




      sss
      </p>

      <h1 className='text-green-950 dark:text-blue-100' > {/* caso esteja no tema escuro do navegador vai mudar a cor pra azul */}
      ain baitola

      </h1>
    </div>
    
  )
}

export default App
