import "./App.css";
import React, { useState } from "react";

export default function FormatedDate(props) {
  console.log(props.date);
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[props.date.getDay()];

  return `${day} ${hours}:${minutes}`;
}
