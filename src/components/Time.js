import React from "react";
// import "./FormattedDate.css";

export default function Time(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];

  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="Time">
      <div className="update"> Last updated: </div>
      <span className="time">
        {day}, {hours}:{minutes}
      </span>
    </div>
  );
}
