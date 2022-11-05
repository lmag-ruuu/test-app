import React from "react";
import { Button, Anchor } from "./components";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme";
import MainContainer from "./styled/MainContainer";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <MainContainer>
        <h1>Hey, its working</h1>
        <Button handleFn={() => console.log("clickado papu")}>Hola xd</Button>
        <Anchor href="https://github.com/lmag-ruuu/test-app" target="_blank">
          Open repo
        </Anchor>
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
