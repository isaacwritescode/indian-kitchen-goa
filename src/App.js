import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";
import Main from "./Main";
import theme from "./theme";

function App() {
  return <ThemeProvider theme={theme}>
    <WavyContainer />
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </ThemeProvider>
}

export default App;
