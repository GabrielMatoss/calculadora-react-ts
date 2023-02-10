import { useState } from "react";
import {
  CalculadoraContainer,
  TecladoDiv,
  Teclas,
  VisorCalculo,
} from "./Calculadora.styles";

export function Calculadora() {
  return (
    <CalculadoraContainer>
      <VisorCalculo>
        <div id="visorCalc">
          <div id="operations">
            <div>
              <span>2</span>
              <span>+</span>
              <span>2</span>
            </div>
            <div id="current_operation">4</div>
          </div>
          <div>=</div>
        </div>
      </VisorCalculo>
      <TecladoDiv>
        <Teclas name="CE" >
          CE
        </Teclas>
        <Teclas name="C" >
          C
        </Teclas>
        <Teclas name="%" >
          %
        </Teclas>
        <Teclas name="/" >
          /
        </Teclas>
        <Teclas name="7" >
          7
        </Teclas>
        <Teclas name="8" >
          8
        </Teclas>
        <Teclas name="9" >
          9
        </Teclas>
        <Teclas name="*" >
          x
        </Teclas>
        <Teclas name="4" >
          4
        </Teclas>
        <Teclas name="5" >
          5
        </Teclas>
        <Teclas name="6" >
          6
        </Teclas>
        <Teclas name="-" >
          -
        </Teclas>
        <Teclas name="1" >
          1
        </Teclas>
        <Teclas name="2" >
          2
        </Teclas>
        <Teclas name="3" >
          3
        </Teclas>
        <Teclas name="+" >
          +
        </Teclas>
        <Teclas name="+/-" >
          +/-
        </Teclas>
        <Teclas name="0" >
          0
        </Teclas>
        <Teclas name="," >
          ,
        </Teclas>
        <Teclas name="=" >
          =
        </Teclas>
      </TecladoDiv>
    </CalculadoraContainer>
  );
}
