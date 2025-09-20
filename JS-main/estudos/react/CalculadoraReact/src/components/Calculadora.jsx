import "./Calculadora.css"
import { useState } from "react" // Importe o useState
import Button from "./Button"
import Display from "./Display"

const estadoInicial = { // Corrigi o nome para "estadoInicial" (era "inicalEstado")
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

const Calculadora = () => {
    const [state, setState] = useState(estadoInicial) 

    const limparMemoria = () => {
        setState(estadoInicial) 
    }

  const setOperador = (operador) => {
  if(state.current === 0){
    setState({
      ...state,
      operation: operador, 
      current: 1,
      clearDisplay: true,
      values: [parseFloat(state.displayValue), state.values[1]] // Armazena o primeiro valor
    })
  } else {
    const igual = operador === "="
    const currentOperation = state.operation
    
    // Calcula o resultado de forma segura
    const calculate = (a, b, op) => {
      switch(op) {
        case '+': return a + b
        case '-': return a - b
        case '*': return a * b
        case '/': return a / b
        default: return b
      }
    }
    
    const values = [...state.values]
    values[0] = calculate(values[0], parseFloat(state.displayValue), currentOperation)
    values[1] = 0
    
    setState({
      displayValue: String(values[0]),
      operation: igual ? null : operador,
      current: igual ? 0 : 1,
      clearDisplay: !igual,
      values  // Corrigido: usando o nome correto da propriedade
    })
  }
}

  const addDigito = (digito) => {
    if (digito === "." && state.displayValue.includes(".")) {
        return; // Ignora se já houver um ponto decimal
    }

    const clearDisplay = state.displayValue === "0" || state.clearDisplay;
    const currentValue = clearDisplay ? "" : state.displayValue;
    const displayValue = currentValue + digito;

    // Atualiza displayValue e clearDisplay
    setState({
        ...state, // Mantém todas as outras propriedades do estado
        displayValue,
        clearDisplay: false
    });

    if (digito !== ".") {
        const i = state.current;
        const newValue = parseFloat(displayValue);
        const values = [...state.values];
        values[i] = newValue;

        
        setState(prevState => ({
            ...prevState, // matem os valoes
            values // atualiza os valoes 

        }));
        console.log(values)
    }
};
    return (
        <div className="calculadora">
            <Display value={state.displayValue} /> {/* Correção: state em vez de this.state */}
            <Button label="AC" click={limparMemoria} triple />
            <Button label="/" click={() => setOperador("/")} operation />
            <Button label="7" click={() => addDigito("7")} />
            <Button label="8" click={() => addDigito("8")} />
            <Button label="9" click={() => addDigito("9")} />
            <Button label="*" click={() => setOperador("*")} operation />
            <Button label="4" click={() => addDigito("4")} />
            <Button label="5" click={() => addDigito("5")} />
            <Button label="6" click={() => addDigito("6")} />
            <Button label="-" click={() => setOperador("-")} operation />
            <Button label="1" click={() => addDigito("1")} />
            <Button label="2" click={() => addDigito("2")} />
            <Button label="3" click={() => addDigito("3")} />
            <Button label="+" click={() => setOperador("+")} operation />
            <Button label="0" click={() => addDigito("0")} double />
            <Button label="." click={() => addDigito(".")} />
            <Button label="=" click={() => setOperador("=")} operation />
        </div>
    )
}

export default Calculadora