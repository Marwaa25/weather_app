import React from "react";
import Time from "./Time";
import Icon from "./Icon";
import Temperature from "./Temperature";
import Sunset from "./Sunset"
import Sunrise from "./Sunrise"

// import "./WeatherInfo.css";

export default function Box(props) {
  return (
    <div className="Box">
      {" "}
      <div className="box">
        <div className="infotime">
          {" "}
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <Time date={props.data.date} />
            </li>
            <li>
              {props.data.description}
            </li>
          </ul>
        </div>
        <div className="sun">
          <Sunrise time={props.data.sunrise} />
          <Sunset time={props.data.sunset} />
        </div>
      </div>
      <div className="tempinfo" >
          <div className="temp">
            <div >
              <Icon code={props.data.icon} />
            </div>
            <div >
              <Temperature celsius={props.data.temperature} />
            </div>
          </div>
        
        <div >
          <ul className="info">
            <li>Humidity: {props.data.humidity}% &nbsp; </li>
            <li>Wind: {props.data.wind}m/s &nbsp;</li>
            <li> Pressure: {props.data.pressure}hPa </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
