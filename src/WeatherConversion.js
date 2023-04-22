import React, { useState } from "react";

export default function WeatherConversion(props) {
  /////
  const [convert, setConvert] = useState("celsius");
  ////
  function showFahrenheit(event) {
    event.preventDefault();
    setConvert("fahrenheit");
  }
  //////
  function showCelsius(event) {
    event.preventDefault();
    setConvert("celsius");
  }
  if (convert === "celsius") {
    return (
      <div className="weatherConversion">
        <span id="temperature">{Math.round(props.celsius)}</span>
        <small className="units">
          <span>
            °C |{" "}
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </small>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <div className="weatherConversion">
        <span id="temperature">{Math.round(fahrenheit)}</span>
        <small className="units">
          <span>
            <a href="/" onClick={showCelsius}>
              °C |
            </a>
            °F
          </span>
        </small>
      </div>
    );
  }
}
