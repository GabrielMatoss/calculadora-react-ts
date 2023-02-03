import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./styles/global";
import { defaultColors } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultColors}>
    <h1>Calculadora</h1>
    <GlobalStyles />
    </ThemeProvider>
  )
}


