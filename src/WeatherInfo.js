import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import "./App.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Form">
        <div className="row">
          <div className="col-3">
            <div className="float-left">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </div>
          </div>
          <div className="col-5">
            <div id="location">{props.data.location} </div>
            <FormatedDate date={props.data.date} />
            <div id="date"></div>
            <span id="temperature">{Math.round(props.data.temperature)}</span>
            <small className="units">
              <a href="/#">°C</a>|<a href="/#">°F</a>
            </small>
          </div>
          <div className="col-4">
            <div id="description" className="small text-capitalize">
              <strong>{props.data.description}</strong>
            </div>
            <hr />
            <span className="small">Humidity:{props.data.humidity}</span>
            <span id="humidity" className="small"></span>
            <span className="small">%</span> <br />
            <span className="small">Wind:{Math.round(props.data.wind)}</span>
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
