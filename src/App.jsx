import React from "react";
import Button from "./components/button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hey, its working</h1>
      <Button handleFn={() => console.log("clickado papu")}>Hola xd</Button>
    </div>
  );
}

export default App;
