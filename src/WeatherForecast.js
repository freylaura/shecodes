import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  ////////////

  function showResponse(response) {
    console.log(response.data);
  }
  ///////////
  let key = "t839o90730bbac3f30bc244a8bc9470a";
  let query = props.location;

  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${key}&units=metric`;
  axios.get(apiUrl).then(showResponse);

  ///////////////
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
