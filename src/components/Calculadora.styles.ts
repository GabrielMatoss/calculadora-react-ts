import styled from "styled-components";

export const CalculadoraContainer = styled.main`
    max-width: 22.25rem;
    height: 35.37rem;

    background-color: ${props => props.theme["background-calculator"]};

    margin: 1rem auto;
    padding: 2rem;

    border-radius: 48px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04), 0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26), 0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1), inset 0px -4px 5px rgba(0, 0, 0, 0.22);
`;

export const VisorCalculo = styled.div`
    width: 100%;
    
    //background-color: cadetblue;

    #visorCalc {
        padding-inline: 1rem;
        display: flex;
        flex-direction: row-reverse;
        align-items: flex-end;
        justify-content: space-between;


        > div {
                color: ${props => props.theme["color-numbers-calculate"]};
                font-size: 1rem;
                line-height: 1rem;
            }

        #operations {
            display: flex;
            flex-direction: column;
            //background-color: blueviolet;
            justify-content: center;
            align-items: flex-end;

            > div {
                font-size: 1.25rem;
                line-height: 1.75rem;
                color: ${props => props.theme["color-numbers-calculate"]};
            }

            > #current_operation {
                font-size: 2.25rem;
                line-height: 3.15rem;
                color: ${props => props.theme["color-general-operator"]};;
            }

           
        }
    }
`;

export const TecladoDiv = styled.div`
   // background-color: red;
    width: 18.25rem;

    display: grid;
    gap: .75rem;
    grid-template-columns: repeat(4, 1fr);

    > button {
        line-height: 28.44px;
        font-size: 1.5rem;
    }
`;

export const Teclas = styled.button`
    width: 4rem;
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
    border: none;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04), 0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26), 0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1), inset 0px -4px 5px rgba(0, 0, 0, 0.22);

    background-color: ${props => props.theme["background-calculator"]};
    color: ${props => props.theme["color-general-operator"]};
`;

