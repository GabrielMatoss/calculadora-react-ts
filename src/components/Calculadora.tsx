
import { CalculadoraContainer, TecladoDiv, Teclas, VisorCalculo } from "./Calculadora.styles";


export function Calculadora() {
    return (
        <CalculadoraContainer >
            <VisorCalculo>
                <div id="visorCalc">
                    <div id="operations">
                         <div>1+1</div>
                         <div id="current_operation">2</div>
                    </div>
                    <div>=</div>
                </div>
            </VisorCalculo>
            <TecladoDiv>
                <Teclas>CE</Teclas>
                <Teclas>C</Teclas>
                <Teclas>%</Teclas>
                <Teclas>/</Teclas>
                <Teclas>7</Teclas>
                <Teclas>8</Teclas>
                <Teclas>9</Teclas>
                <Teclas>x</Teclas>
                <Teclas>4</Teclas>
                <Teclas>5</Teclas>
                <Teclas>6</Teclas>
                <Teclas>-</Teclas>
                <Teclas>1</Teclas>
                <Teclas>2</Teclas>
                <Teclas>3</Teclas>
                <Teclas>+</Teclas>
                <Teclas>+/-</Teclas>
                <Teclas>0</Teclas>
                <Teclas>,</Teclas>
                <Teclas>=</Teclas>
            </TecladoDiv>
        </CalculadoraContainer>
    )
}