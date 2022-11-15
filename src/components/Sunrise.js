import React from "react";
import { WiSunrise } from "react-icons/wi";

// import "./Sunrise.css";

export default function Sunrise(props) {
  let hours = props.time.getHours();
  let minutes = props.time.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      <ul>
        <li>
          <WiSunrise size="3em" color="orange" /> Sunrise: {hours}:{minutes}
        </li>
      </ul>
    </div>
  );
}
