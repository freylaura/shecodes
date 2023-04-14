import "./App.css";
import React from "react";

export default function Search() {
  return (
    <div className="Form">
      <div className="row">
        <div className="col-3">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            alt="Clear"
          />
        </div>
        <div class="col-5">
          <div id="location"></div>
          <div id="date"></div>
          <span id="temperature"></span>
          <small class="units">
            <a>°C</a>|<a>°F</a>
          </small>
        </div>
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
    </div>
  );
}
