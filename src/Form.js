import "./App.css";
import React from "react";
import Forecast from "./Forecast";

export default function Form() {
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
            autocomplete="off"
          />
          <button
            className="btn btn-outline-secondary"
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
              <a href="/#">°C</a>|<a href="/#">°F</a>
            </small>
          </div>
          <Forecast />
        </div>
      </div>
    </div>
  );
}
