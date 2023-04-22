import React from "react";

export default function WeatherInfo() {
  return (
    <div className="WeatherInfo">
      <div className="Form">
        <div className="row">
          <div className="col-3">
            <img src={data.icon} alt={data.description} />
          </div>
          <div className="col-5">
            <div id="location">{data.location} </div>
            <FormatedDate date={data.date} />
            <div id="date"></div>
            <span id="temperature">{Math.round(data.temperature)}</span>
            <small className="units">
              <a href="/#">°C</a>|<a href="/#">°F</a>
            </small>
          </div>
          <div className="col-4">
            <div id="description" className="small text-capitalize">
              <strong>{data.description}</strong>
            </div>
            <hr />
            <span className="small">Humidity:{data.humidity}</span>
            <span id="humidity" className="small"></span>
            <span className="small">%</span> <br />
            <span className="small">Wind:{Math.round(data.wind)}</span>
            <span id="wind" className="small"></span>
            <span className="small">km/h </span>
          </div>
          <hr />
          <div className="weather-forecast" id="forecast">
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
}
