const Challenge = () =>{
    let a = 2
    let b = 2 
    return(
        <div>
            <p>A:{a}</p> 
            <p>B:{b}</p>
            <div>
                <button onClick={() =>{
                    console.log(a+b)
                }}>aqui</button>
            </div>
        </div>
    )
}
export default Challenge