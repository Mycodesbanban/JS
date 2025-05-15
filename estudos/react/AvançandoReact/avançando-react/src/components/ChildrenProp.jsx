const ChildrenProp = ({ children, myvalue }) => {
  return (
    <div>
      <h2>ChildrenProp</h2>

      {children}
      {myvalue} 
    </div>
  );
}; // o que está acontecendo com esse codigo é que estamos pegando o elemento filho que definimos no arquivo principal
  
export default ChildrenProp;

// codigo do arquivo principal

// <ChildrenProp myvalue="teste">
//   <p>este é o conteudo</p>
// </ChildrenProp>;
