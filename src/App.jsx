import React from "react";
import Button from "./components/button/button";
import "./scss/style";

function App() {
  return (
    <>
      <h1>Hey, its working</h1>
      <Button handleFn={() => console.log("clickado papu")}>Hola xd</Button>
    </>
  );
}

export default App;
