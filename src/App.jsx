import React from "react";
import { Button, Anchor } from "./components";
import "./scss/style";

function App() {
  return (
    <main className="container">
      <h1>Hey, its working</h1>
      <Button handleFn={() => console.log("clickado papu")}>Hola xd</Button>
      <Anchor href="https://github.com/lmag-ruuu/test-app" target="_blank">
        Open repo
      </Anchor>
    </main>
  );
}

export default App;
