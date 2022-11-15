import React from "react";
import Icon from "./Icon";

export default function HourlyWeather(props) {
 

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}℃`;
  }
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }
  return (
    <div className="hourlyweather ">
      <p>{hours()}</p>
      <Icon code={props.data.weather[0].icon} />
      <p>{temperature()}</p>
    </div>
  );
}
