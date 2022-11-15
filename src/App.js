import React from "react";
import "./App.css";
import Weather from "./components/WeatherAPI";

export default function App() {
  return (
    <div className="Container">
      <div className="container">
        <Weather defaultCity='Tetouan'/>
     </div>
     </div>
  
  );
}
