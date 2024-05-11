import React from "react";
import "./App.css";
import Intro from "./components/Intro";
import Form from "./components/Form";

function App() {
  return (
    <main className="outer-container">
      <div className="inner-container">
        <Intro />
        <Form />
      </div>
    </main>
  );
}

export default App;
