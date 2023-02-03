import { ThemeProvider } from "styled-components";
import { Calculadora } from "./components/Calculadora";
import { GlobalStyles } from "./styles/global";
import { defaultColors } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultColors}>
   <Calculadora />
    
    <GlobalStyles />
    </ThemeProvider>
  )
}


