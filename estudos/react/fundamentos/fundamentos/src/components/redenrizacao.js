const red = ()=>{
    const redersoment = (x) =>{
        if(x){
            return <h1>posso reder</h1>
        } else{
            return <h1>tambem </h1>
        }
    }
    return(
        <div>
            {redersoment()}
            {/* Com os parênteses (redersoment()), estamos executando a função imediatamente e capturando o resultado dela. */}
            
            {/* Sem os parênteses (redersoment), estamos referenciando a função, mas não a estamos executando imediatamente. */}
        </div>
    )
}