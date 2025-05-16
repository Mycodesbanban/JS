import { useState } from 'react'
import './App.css'
import DetalhesCar from './components/DetalhesCar';

const carros = [
  {id:1 , name:"ferarri" , value:1242502},
  {id:2 , name:"BMW" , value:124522},
  {id:3 , name:"Civic" , value:24502},
 ]


function App() {


  return (
    <div>
     <h1>carros</h1>
    <div className='car_conteiner'>
      {carros.map((car)=>(
        <DetalhesCar key={car.id} car={car}/>
      ))}
    </div>
    </div>
  )
}

export default App
