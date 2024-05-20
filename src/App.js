import "./App.css";
import React from "react";
import SoalSatu from "./SoalSatu";
import SoalDua from "./SoalDua";
import SoalTiga from "./SoalTiga";
import SoalEmpat from "./SoalEmpat";
import SoalLima from "./SoalLima";

function App() {
  return (
    <div className="App">
      <SoalSatu />
      <SoalDua />
      <SoalTiga />
      <SoalEmpat />
      <SoalLima />
    </div>
  );
}

export default App;
