const Userdetalhis = ({name , age , job}) => {
  return (
    <div>
        <h2>{name}</h2>
        <h3>idade:{age}</h3>
        <h4>profissão:{job}</h4>
        {age >= 18? <p>você tem mais de 18 anos</p>  :  <p>você tem menos de 18 anos</p> }
    </div>
  )
}

export default Userdetalhis