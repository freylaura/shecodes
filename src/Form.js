import "./App.css";
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Form(props) {
  const [data, setData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultcity);
  //////
  function showResult(response) {
    setData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      location: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }
  //////////

  /////////
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  ////////////
  function handleSearchCity(event) {
    setCity(event.target.value);
  }

  /////////
  function search() {
    let key = "bd3bb6534458ba51b48c49f5155745b6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(apiUrl).then(showResult);
  }
  //////
  if (data.ready) {
    return (
      <div className="Form">
        <div className="input-group mb-2 search-for-a-city">
          <form id="searchForm" onSubmit={handleSubmit}>
            <input
              id="inputSearching"
              type="search"
              className="form-control"
              placeholder="Search for a city..."
              aria-label="city search"
              aria-describedby="button-addon2"
              autoComplete="off"
              onChange={handleSearchCity}
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
        <WeatherInfo data={data} />
        <WeatherForecast location={city} />
      </div>
    );
  } else {
    return search();
  }
}
