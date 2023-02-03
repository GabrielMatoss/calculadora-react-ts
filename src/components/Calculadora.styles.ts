import styled from "styled-components";

export const CalculadoraContainer = styled.main`
    max-width: 22.25rem;
   // height: 35.37rem;

    background-color: ${props => props.theme["background-calculator"]};

    margin: 1rem auto;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.625rem;
`;

export const VisorCalculo = styled.div`
    width: 18rem;

    background-color: cadetblue;
`;

export const TecladoDiv = styled.div`
    background-color: burlywood;
    width: 18.25rem;
    display: grid;
    gap: .5rem;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
`;

export const Teclas = styled.div`
    width: 4rem;
    height: 4rem;

    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${props => props.theme["background-calculator"]};
    color: ${props => props.theme["color-general-operator"]};
`;

