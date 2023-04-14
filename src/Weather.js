import React from "react";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";

export default function Weather(props) {
  function showResponse(response) {
    alert(
      `The Temperature in ${response.data.name} is ${response.data.main.temp} °C`
    );
  }
  let key = "96771e971243152d6b8948878c26adde";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${key}&units=metric`;
  axios.get(apiUrl).then(showResponse);

  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={["white", "red", "black", "white", "red"]}
    />
  );
}
