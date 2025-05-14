import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Kwai from "./assets/c5a55ec0a38f65212d5047826e8d1ecc.jpg";
import ManageData from "./components/manageData";
import ListRender from "./components/ListRender";
import CondicionalRender from "./components/CondicionalRender";
import IFELSE from "./components/ifElse";
import Props from "./components/props";
import DesestruturandoProps from "./components/desestruturandoProps";
import ReutilizandoComponetes from "./components/ReutilizandoComponetes";
import Fragments1 from "./components/Fragments1";
import ChildrenProp from "./components/childrenProp";
import FunctionProps from "./components/functionProps";
import StateLift from "./components/StateLift";
import AlterarAmensageem from "./components/AlterarAmensageem";

function showMessage() {
  console.log("componente pai");
}

function App() {
  const [count, setCount] = useState(0);

  const cars = [
    { id: 1, brand: "RT", color: "amarelo", newCar: true, km: 0 },
    { id: 2, brand: "PK", color: "blue", newCar: false, km: 931 },
    { id: 3, brand: "KHJ", color: "pink", newCar: "false", km: 203 },
  ];

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <>
      <div>
        <h1>Avançando no react</h1>
        {/* imagem em public */}
        <div>
          <img src="/c5a55ec0a38f65212d5047826e8d1ecc.jpg" alt="img" />
        </div>
        <div>
          {/* imagem em assets */}
          <img src={Kwai} alt="kwai" />
          <ManageData />
          <ListRender />
          <CondicionalRender />
          <IFELSE />
          {/* props */}
          <Props name="Matheus" />
          {/* destructuring */}
          <DesestruturandoProps brand="VW" km={1933} color="Azul" />
          {/* reaproveitando arquivos */}
          <ReutilizandoComponetes
            brand="ford"
            color="blue"
            km={1842}
            newCar={true}
          />
          <ReutilizandoComponetes
            brand="civic"
            color="ciano"
            km={32842}
            newCar={false}
          />
          {/* loop em arrays de objetos */}
          {cars.map((car) => (
            <ReutilizandoComponetes
              brand={car.brand}
              color={car.color}
              km={car.km}
              newCar={car.newCar}
              key={car.id}
            />
          ))}
          {/* usando fragments */}
          <Fragments1 />
          {/* childrenprop */}
          <ChildrenProp myvalue="teste">
            <p>este é o conteudo</p>
          </ChildrenProp>
          {/* executar função */}
          <FunctionProps myFunction={showMessage}/>
          {/* state lift */}
          <StateLift msg={message}/>
          <AlterarAmensageem handleMessage={handleMessage}/>
        </div>
      </div>
    </>
  );
}

export default App;

