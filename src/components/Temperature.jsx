import React from "react";
// import "./WeatherTemperature.css";

export default function Temperature(props) {

    return (
      <div className="temp">
        {Math.round(props.celsius)}
          ℃ {" "}
      </div>
    );

  }

