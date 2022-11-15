import {WiSunset} from "react-icons/wi";

export default function Sunset(props) {
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
            <WiSunset size="3em" color="blue" /> Sunset: {hours}:{minutes}
          </li>
        </ul>
      </div>
    );
  }
