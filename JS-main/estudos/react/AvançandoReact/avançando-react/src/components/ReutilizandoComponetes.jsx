const ReutilizandoComponetes = ({brand , color , km  , newCar}) => {
  return (
    <div>
        <h2>ReutilizandoComponetes</h2>
        <ul>
            <li>marca:{brand}</li>
            <li>color:{color}</li>
            <li>km:{km}</li>
            <li>Novo:{newCar === true ? (
                <div>
                    <p>seu carro é novo</p>
                </div>
            ):(
                <div>
                    <p>seu carro é velho</p>
                </div>
            )

            }</li>
        </ul>
    </div>
  )
  // codigo no arquivo principal que estamos reaproveitando
    //   <ReutilizandoComponetes brand="ford" color="blue" km={1842}/>
    //     <ReutilizandoComponetes brand="civic" color="ciano" km={32842}/>
}

export default ReutilizandoComponetes