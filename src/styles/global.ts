import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        height: 100%;
        background-color: ${(props) => props.theme["background-body"]};
        color: ${(props) => props.theme["color-general-operator"]};
    }

    body, button {
        font-family: 'Rubik', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;
