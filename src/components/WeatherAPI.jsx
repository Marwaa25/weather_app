import React, { useState } from "react";
import Box from "./Box";
import axios from "axios";
import Hourly from "./Hourly";
// import "./Weather.css";

export default function Weather(props) {
  const [data, setData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      icon: response.data.weather[0].icon,
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
    });
  }
  function search() {
    const key = "997ab4536dabb4b832e5806b66e608ce";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    
    axios.get(url).then(handleResponse);
  }
  function handleSubmit(e) {
    e.preventDefault();
    search();
  }

  function handleCityChange(e) {
    setCity(e.target.value);
  }
  if (data.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="searchbar">
            <div className="searchinput">
              <input
                type="text"
                placeholder="Enter a city..."
                className="search"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="btn">
              <input
                type="submit"
                value="search"
                className="searchbtn"
              />
            </div>
          </div>
        </form>
        <Box data={data} />
        <Hourly city={data.city} />

       
      </div>
    );
  } else {
    search();
    return "...";
  }
}
