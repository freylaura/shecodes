import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Weather App</h1>
        <Weather city="Jena" />
      </header>
    </div>
  );
}

export default App;
