const StateLift = ({ msg }) => { // destruturando o objeto mensagem do arquivo principal
  return (
    <div>
      <h1>a mensagem é :{msg}</h1> 
      {/* retonando a mesnagem do arquivo */}
    </div>
  );
};

export default StateLift; 

// codigo do arquivo principal
//  const [message, setMessage] = useState("");  // criando a variavel mensagem e a função setMessage , e atribuindo uma string vazia para o use state

//   const handleMessage = (msg) => { //recebe o valor que foi passado quando a função for chamada 
//     setMessage(msg); // vai atualizar o valor do estado 
//   };

// arquivos chamados no arquivo principal
// <StateLift msg={message}/>
//<AlterarAmensageem handleMessage={handleMessage}/>

//codigo do arquivo alterar mensagenm 
// const AlterarAmensageem = ({handleMessage}) => {

//     const message = ["oi" , "olá " , "tudo bem"]
//   return (
//     <div>
//         <button onClick={() => handleMessage(message[0])}>1</button> // quando clicar no botão 1 vai atualizar o valor do navegador para oi
//         <button onClick={() => handleMessage(message[1])}>2</button> // quando clicar no botão 2 vai atualizar o valor do navegador para olá 
//         <button onClick={() => handleMessage(message[2])}>3</button> // quando clicar no botão 3 vai atualizar o valor do navegador para tudo bem 
//     </div>
//   )
// }

// export default AlterarAmensageem
