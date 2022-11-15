import React, { useState } from "react";
import axios from "axios";
import HourlyWeather from "./HourlyWeather";
// import "./WeatherForecast.css";

export default function Hourly(props) {
  const [loaded, setLoaded] = useState(false);
  const [hourly, setHourly] = useState(null);
  function handleResponse(response) {
    setHourly(response.data);
    setLoaded(true);
  }
  if (loaded && props.city === hourly.city.name) {
    return (
      <div className="Weather">
        <HourlyWeather data={hourly.list[0]} />
        <HourlyWeather data={hourly.list[1]} />
        <HourlyWeather data={hourly.list[2]} />
        <HourlyWeather data={hourly.list[3]} />
        <HourlyWeather data={hourly.list[4]} />
        <HourlyWeather data={hourly.list[5]} />
      </div>
    );
  } else {
    let apiKey = "997ab4536dabb4b832e5806b66e608ce";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(handleResponse);
    return "Loading";
  }
}
