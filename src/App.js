import "./App.css";
import Form from "./Form";
import Search from "./Search";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="container-outbox">
          <Form />
          <Search />
          <div id="footer">
            <a
              href="https://github.com/freylaura/shecodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code
            </a>
            by Laura Frey
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
