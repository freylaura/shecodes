import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header-1">
        <div className="container">
          <div className="container-outbox">
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
              </form>
            </div>
            <div className="row">
              <div className="col-3">
                <img src="#" id="icon" width="70" alt="weathericon" />
              </div>
              <div class="col-5">
                <div id="location"></div>
                <div id="date"></div>
                <span id="temperature"></span>
                <small class="units">
                  <a href="#" id="celsiuslink" className="active">
                    °C
                  </a>
                  |
                  <a href="#" id="fahrenheitlink">
                    °F
                  </a>
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
            <div id="footer">
              <a
                href="https://github.com/freylaura/weather-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open-source code
              </a>
              by Laura Frey
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
