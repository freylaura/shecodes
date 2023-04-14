import "./App.css";
import React from "react";

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
    </div>
  );
}
