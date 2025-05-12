const DesestruturandoProps = ({brand , km , color}) => { // destrutura o objeto props diretamentente nos parametros da função 
  return (
    <div>
        <h2>detalhes do carro</h2>
        <ul>
            {/* acessando os objetos diretamente pelo os paramentro da função */}
            <li>Marca:{brand}</li> 
            <li>KM:{km}</li>
            <li>Cor:{color}</li>
       {/* <DesestruturandoProps brand="VW" KM={1933} color="Azul"/> aqui nos definimos no arquivo principal , quando um valor for uma string não precisamos colocar a {} , mas sim aspas "" , é quando o valor é numerico precisamos usar o {} , mas não as aspas ""*/}
        </ul>
    </div>
  )
}

export default DesestruturandoProps