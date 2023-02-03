import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    /*Falta criar as tipagens dos temas para funcionar*/
    body {
        background-color: darkcyan;
        color: #fff;
    }
`;