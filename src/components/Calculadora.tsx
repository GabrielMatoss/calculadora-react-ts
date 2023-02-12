import { FormEvent, useState } from "react";
import {
  CalculadoraContainer,
  TecladoDiv,
  Teclas,
  VisorCalculo,
} from "./Calculadora.styles";

export function Calculadora() {
  const [current, setCurrent] = useState<any>(0);
  const [previous, setPrevious] = useState<any>(0);
  const [operatorChoice, setOperadorChoice] = useState("");

  function handleClick(event: any) {
    let keyButton = event.target.value;

    if (current === 0) {
      setCurrent(keyButton);
    } else {
      setCurrent(current + keyButton);
    }
  }

  function clearAll() {
    setCurrent(0);
    setPrevious(0);
    setOperadorChoice("");
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  function porcentage() {
    setCurrent(current / 100);
  }

  function operadorChange() {
    if (current > 0) {
      setCurrent(-current);
    } else {
      setCurrent(Math.abs(current));
    }
  }

  function operatorHandler(event: any) {
    let operatorInput = event.target.value;
    setOperadorChoice(operatorInput);
    setCurrent(0);
    setPrevious(current);
  }

  function calculate() {
    switch (operatorChoice) {
      case "/":
        setCurrent(parseFloat(previous) / parseFloat(current));
        break;
      case "*":
        setCurrent(parseFloat(previous) * parseFloat(current));
        break;
      case "+":
        setCurrent(+current + +previous); // parseFloat ?
        break;
      case "-":
        setCurrent(parseFloat(previous) - parseFloat(current));
        break;
    }
  }

  return (
    <CalculadoraContainer>
      <VisorCalculo>
        <div id="visorCalc">

          <div id="operations">

            <div id="currentOperation">
              {current}
              <span>{operatorChoice}</span>
            </div>

            <div>
              <div id="previousOperation">{previous}</div>
            </div>

            <div id="total">{previous}</div>
            
          </div>

          <div>=</div>
        </div>
      </VisorCalculo>
      <TecladoDiv onSubmit={handleSubmit}>
        <Teclas name="CE" onClick={clearAll}>
          CE
        </Teclas>
        <Teclas name="C" onClick={handleClick}>
          C
        </Teclas>
        <Teclas name="%" onClick={porcentage}>
          %
        </Teclas>
        <Teclas name="/" value={"/"} onClick={operatorHandler}>
          /
        </Teclas>
        <Teclas name="7" value={7} onClick={handleClick}>
          7
        </Teclas>
        <Teclas name="8" value={8} onClick={handleClick}>
          8
        </Teclas>
        <Teclas name="9" value={9} onClick={handleClick}>
          9
        </Teclas>
        <Teclas name="*" value={"*"} onClick={operatorHandler}>
          x
        </Teclas>
        <Teclas name="4" value={4} onClick={handleClick}>
          4
        </Teclas>
        <Teclas name="5" value={5} onClick={handleClick}>
          5
        </Teclas>
        <Teclas name="6" value={6} onClick={handleClick}>
          6
        </Teclas>
        <Teclas name="-" value={"-"} onClick={operatorHandler}>
          -
        </Teclas>
        <Teclas name="1" value={1} onClick={handleClick}>
          1
        </Teclas>
        <Teclas name="2" value={2} onClick={handleClick}>
          2
        </Teclas>
        <Teclas name="3" value={3} onClick={handleClick}>
          3
        </Teclas>
        <Teclas name="+" value={"+"} onClick={operatorHandler}>
          +
        </Teclas>
        <Teclas name="+/-" onClick={operadorChange}>
          +/-
        </Teclas>
        <Teclas name="0" value={0} onClick={handleClick}>
          0
        </Teclas>
        <Teclas name="," value={"."} onClick={handleClick}>
          ,
        </Teclas>
        <Teclas name="=" onClick={calculate}>
          =
        </Teclas>
      </TecladoDiv>
    </CalculadoraContainer>
  );
}
