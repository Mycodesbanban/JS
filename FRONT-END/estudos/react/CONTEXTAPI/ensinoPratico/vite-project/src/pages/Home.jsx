// import{useContext} from "react"
// import CounterContext from "../Context/CounterContext"
import NavBar from '../components/NavBar'
import ChangeCounter from "../components/ChangeCounter"

// 4-refatorando com hook
import { useCounterContext } from '../hook/useCounterContext'
import { useTitleContext } from '../hook/useTitleContext'

const Home = () => {

  const {counter} = useCounterContext()
  // const {counter} = useContext(CounterContext)
   const {color , dispatch} = useTitleContext()

  //  alterando state complexo

  const setTitleColor = (color) =>{
    dispatch({type:color})
  }

  return (
    <div>
        <h1 style={{color:color}}>pag1</h1>
        <p>valor do contador:{counter}</p>
        <NavBar/>
        <ChangeCounter/>
        <div>
          <button onClick={() => setTitleColor("RED")}>vermelho</button>
           <button onClick={() => setTitleColor("BLUE")}>azul</button>
        </div>
   

    </div>
  )
}

export default Home