import "./App.css";
import Form from "./Form";

import React from "react";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="container-outbox">
          <Form defaultcity="Berlin" />
          <div id="footer">
            <a
              href="https://github.com/freylaura/shecodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code{""}
            </a>
            {""} by Laura Frey
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
