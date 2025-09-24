const Props = (props) => {
  return (
    <div>
        <h2>Nome do usuario:{props.name}</h2> 
        {/* o que fizemos foi definir o name quando chamanos no arquivo principal  , e passamos para o filho que é o parametro props */}
    </div>
        // <DesestruturandoProps brand="VW" KM={1933} color="Azul"/>
  )
}

export default Props

//     <Props name="Matheus"/> chamandos assim no arquivo principal onde vai esta o servidor 