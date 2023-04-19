import "./App.css";
import React, { useState } from "react";
import FormatedDate from "./FormatedDate";

import axios from "axios";

export default function Form(props) {
  const [data, setData] = useState({ ready: false }); /// damit api nicht dauernd druchläuft sondern nur wenn wir ein call machen

  //////
  function showResult(response) {
    console.log(response.data);
    setData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      location: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: "https://openweathermap.org/img/wn/10d@2x.png",
    });
  }

  /////////

  ////////////
  if (data.ready) {
    return (
      <div className="Form">
        <div className="input-group mb-2 search-for-a-city">
          <form id="searchForm">
            <input
              id="inputSearching"
              type="search"
              className="form-control"
              placeholder="Search for a city..."
              aria-label="city search"
              aria-describedby="button-addon2"
              autoComplete="off"
            />

            <button
              className="btn btn-outline-secondary me-3"
              type="submit"
              id="search-btn"
            >
              Search
            </button>
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="current-location-btn"
            >
              Current
            </button>
          </form>{" "}
        </div>
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
  } else {
    let city = "Stockach";
    let key = "bd3bb6534458ba51b48c49f5155745b6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${key}&units=metric`;
    axios.get(apiUrl).then(showResult);

    return "loading....";
  }
}
