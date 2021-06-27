import "./WeatherContainer.css";
import { formatTemperature, formatWind } from "../../helpers";

export interface WeatherData {
  weather: {
    id: number;
    main: string;
    description: string;
  };
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: Number;
  };
}

const WeatherContainer = (props: WeatherData) => {
  return (
    <div className="weather-container">
      <h3>Summary</h3>
      <span>
        General: {props.weather.main} ({props.weather.description})
      </span>
      <span>
        Temperatur: {formatTemperature(props.main.temp)} (feels like{" "}
        {formatTemperature(props.main.feels_like)})
      </span>
      <span>Humidity: {props.main.humidity}% </span>
      <span>Wind: {formatWind(props.wind.speed)} </span>
      <span>Clouds: {props.clouds.all}%</span>
    </div>
  );
};

export { WeatherContainer };
