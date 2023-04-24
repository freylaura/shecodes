import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Thu</div>
          <WeatherIcon code="01d" height="10" />
          <br />
          <span className="ForecastTempMin">11 </span>
          <span className="ForecastTempMax">33 </span>
        </div>
        <div className="col">
          <div className="ForecastDay">Wed</div>
          <WeatherIcon code="01d" height="10" />
          <br />
          <span className="ForecastTempMin">11 </span>
          <span className="ForecastTempMax">33 </span>
        </div>
        <div className="col">
          <div className="ForecastDay">Tue</div>
          <WeatherIcon code="01d" height="10" />
          <br />
          <span className="ForecastTempMin">11 </span>
          <span className="ForecastTempMax">33 </span>
        </div>
        <div className="col">
          <div className="ForecastDay">Fri</div>
          <WeatherIcon code="01d" height="10" />
          <br />
          <span className="ForecastTempMin">11 </span>
          <span className="ForecastTempMax">33 </span>
        </div>
        <div className="col">
          <div className="ForecastDay">Sat</div>
          <WeatherIcon code="01d" height="10" />
          <br />
          <span className="ForecastTempMin">11 </span>
          <span className="ForecastTempMax">33 </span>
        </div>
      </div>
    </div>
  );
}
