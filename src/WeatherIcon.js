import React from "react";
import WeatherInfo from "./WeatherInfo";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",

    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",

    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",

    "04n": "CLOUDY",
    "04d": "CLOUDY",

    "09d": "RAIN",
    "09n": "RAIN",

    "10d": "SLEET",
    "10n": "SLEET",

    "11d": "RAIN",
    "11n": "RAIN",

    "13d": "SNOW",
    "13n": "SNOW",

    "50d": "FOG",
    "50n": "FOG",
  };
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="orange"
      size={84}
      animate={true}
    />
  );
}
