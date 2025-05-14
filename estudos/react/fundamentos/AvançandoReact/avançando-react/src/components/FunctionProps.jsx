const FunctionProps = ({myFunction}) => { // criando a função e desestruturação de objetos
  return (
    <div>
        <button onClick={myFunction}> clique aqui para executar a função</button>
    </div>
  )
} // criamos uma função no arquivo principal onde a props vai receber esse arquivo , e criamos um botão onde o evento de onClick vai receber essa função 
    //função do arquivo principal
// function showMessage(){
//   console.log("componente pai")
// }
    //codigo do arquivo principal
//<FunctionProps myFunction={showMessage}/>

export default FunctionProps