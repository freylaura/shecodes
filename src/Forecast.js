import React from "react";
import "./App.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div class="col-4">
        <br />
        <div id="description" className="small"></div>
        <span className="small">Humidity:</span>
        <span id="humidity" className="small"></span>
        <span className="small">%</span> <br />
        <span className="small">Wind:</span>
        <span id="wind" className="small"></span>
        <span className="small">km/h </span>
      </div>
      <hr />
      <div className="weather-forecast" id="forecast">
        {" "}
      </div>
    </div>
  );
}
