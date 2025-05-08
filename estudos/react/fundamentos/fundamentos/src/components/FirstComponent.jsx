import Mycomponent from "./Mycomponent";

const FristComponent = () =>{ // criamos uma const que recebe um arrow function que retorna uma div com componetes 
    return(
        <div>
            <h1>
            meu primeiro componete</h1>
            <Mycomponent/>
            </div>
    )
}

export default FristComponent; // exportando 