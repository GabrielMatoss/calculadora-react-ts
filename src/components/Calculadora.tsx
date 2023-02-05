import { useState } from "react";
import {
  CalculadoraContainer,
  TecladoDiv,
  Teclas,
  VisorCalculo,
} from "./Calculadora.styles";


export function Calculadora() {
  const [current, setCurrent] = useState("");
  const [current2, setCurrent2] = useState("");
  function handleClick(event: any) {
    let keyButton = event.target.name;
    //aparentemente eu vou ter que pegar os valores de formas diferentes para cada click
    
    /*
      Podemos tentar capturar o clique e jogar no primeiro numero do calculo, 
      depois capturamos os sinal, e depois o ultimo numero, 
      para aí sim mostrar o resultado se clicarmos no botao de igual.
     */

      /*
        podemos fazer uma verificação direto no keyButton se ele incluir esses operadores a gente quita ele
      */
    const notNumber: any = {
      C: "C",
      CE: "CE",  
    }

    let verifySimple = () => {
      for(let simbols in notNumber){
       return(notNumber[simbols]) 
      }
      }

   return setCurrent(():any => {
    if(keyButton.includes(verifySimple())){
      return "Deu Ruim";
    }else {
      return keyButton;
    }
    
   });
  }

  return (
    <CalculadoraContainer>
      <VisorCalculo>
        <div id="visorCalc">
          <div id="operations">
            <div>
              <span>{current}</span>
              <span>+</span>
              <span>{current2}</span>
            </div>
            <div id="current_operation">2</div>
          </div>
          <div>=</div>
        </div>
      </VisorCalculo>
      <TecladoDiv>
        <Teclas name="CE" onClick={handleClick}>
          CE
        </Teclas>
        <Teclas name="C" onClick={handleClick}>
          C
        </Teclas>
        <Teclas name="%" onClick={handleClick}>
          %
        </Teclas>
        <Teclas name="/" onClick={handleClick}>
          /
        </Teclas>
        <Teclas name="7" onClick={handleClick}>
          7
        </Teclas>
        <Teclas name="8" onClick={handleClick}>
          8
        </Teclas>
        <Teclas name="9" onClick={handleClick}>
          9
        </Teclas>
        <Teclas name="*" onClick={handleClick}>
          x
        </Teclas>
        <Teclas name="4" onClick={handleClick}>
          4
        </Teclas>
        <Teclas name="5" onClick={handleClick}>
          5
        </Teclas>
        <Teclas name="6" onClick={handleClick}>
          6
        </Teclas>
        <Teclas name="-" onClick={handleClick}>
          -
        </Teclas>
        <Teclas name="1" onClick={handleClick}>
          1
        </Teclas>
        <Teclas name="2" onClick={handleClick}>
          2
        </Teclas>
        <Teclas name="3" onClick={handleClick}>
          3
        </Teclas>
        <Teclas name="+" onClick={handleClick}>
          +
        </Teclas>
        <Teclas name="+/-" onClick={handleClick}>
          +/-
        </Teclas>
        <Teclas name="0" onClick={handleClick}>
          0
        </Teclas>
        <Teclas name="," onClick={handleClick}>
          ,
        </Teclas>
        <Teclas name="=" onClick={handleClick}>
          =
        </Teclas>
      </TecladoDiv>
    </CalculadoraContainer>
  );
}
