import "./App.css";
import React, { useState } from "react";

import axios from "axios";

export default function Form() {
  const [data, setData] = useState({});
  const [loaded, setLoaded] = useState(false); ///damit api nicht dauernd durchläuft if else statement

  //////
  function showResult(response) {
    console.log(response.data.icon);
    setData({
      temperature: response.data.main.temp,
      location: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: "https://openweathermap.org/img/wn/10d@2x.png",
    });
    setLoaded(true);
  }

  /////////

  ////////////
  if (loaded) {
    return (
      <div className="Form">
        <div className="input-group mb-2 search-for-a-city">
          <form id="searchForm" /*onSubmit={handleSubmit}*/>
            <input
              id="inputSearching"
              type="search"
              className="form-control"
              placeholder="Search for a city..."
              aria-label="city search"
              aria-describedby="button-addon2"
              autoComplete="off"
              /*onChange={showCity}*/
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
              <img src={data.iconUrl} alt={data.description} />
            </div>
            <div className="col-5">
              <div id="location">{data.location} </div>
              <div id="date">14.04.2023</div>
              <span id="temperature">{Math.round(data.temperature)}</span>
              <small className="units">
                <a href="/#">°C</a>|<a href="/#">°F</a>
              </small>
            </div>
            <div className="col-4">
              <div id="description" className="small">
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
    /*function handleSubmit(event) {*/
    let city = "Berlin";
    let key = "96771e971243152d6b8948878c26adde";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(apiUrl).then(showResult);
    console.log(apiUrl);
    //}
    return "loading....";
  }
}
