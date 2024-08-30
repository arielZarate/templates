import React from "react";
import "./App.css";

//==========importaciones======================================

import Contador from "./Components/Contador";

//=================================================
type Title = {
  title: String;
};

function App({ title }: Title): JSX.Element {
  return (
    <>
      <div className="App">
        <h1 className="title">{title} </h1>

        <Contador />

        <p
          style={{
            fontSize: "15px",
            fontFamily: "monospace",
            margin: "50px 50px",
          }}
        >
          fijarse en la folder redux y en el componente contador{" "}
        </p>
      </div>
    </>
  );
}

export default App;
