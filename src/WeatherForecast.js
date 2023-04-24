import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState();
  //////////// response data sind nur in function showresponse, wir haben im if else statemant keinen zugriff drauf
  function showResponse(response) {
    setForecast(response.data);
    console.log(response);
  }
  if (loaded) {
    /////////// wenn wir daten bekommen zeig das an anonsten return null
    let key = "t839o90730bbac3f30bc244a8bc9470a";
    let query = props.location;

    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${key}&units=metric`;
    axios.get(apiUrl).then(showResponse);
    console.log(apiUrl);
    return null;
    ///////// wenn wir keine daten bekommen zeigt es nur den forecast an
  } else {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="ForecastDay">Thu</div>
            <WeatherIcon code="01d" size={40} />{" "}
            <div className="ForecastTemperature">
              <span className="ForecastTempMin">11 </span>
              <span className="ForecastTempMax">33 </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
