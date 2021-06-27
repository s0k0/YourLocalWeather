import React, { useEffect, useState } from "react";
import config from "./config.json";
import "./App.css";
import { WeatherContainer } from "./components/WeatherContainer/WeatherContainer";
import { LocationInput } from "./components/LocationInput/LocationInput";

export interface WeatherApiResponse {
  id: number;
  name: string;
  weather: [
    {
      id: number;
      main: string;
      description: string;
    }
  ];
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

function App() {
  const [data, setData] = useState<WeatherApiResponse | null>(null);
  const [location, setLocation] = useState<string>("Berlin");

  //TODO: handle error case when location not found
  //TODO: add tests

  useEffect(() => {
    getWeatherData(location);
  }, [location]);

  const getWeatherData = (location: string) => {
    const url = `${config.baseUrl}/data/2.5/weather?q=${location}&appid=${config.apiKey}&units=${config.units}`;
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  };

  const onLocationChange = (value: string) => {
    setLocation(value);
    getWeatherData(value);
  };

  return (
    <div className="App">
      <h1>Weather in {location}</h1>
      <LocationInput
        placeholder="Type a city or region here"
        onSubmit={onLocationChange}
      />
      <div className="weather">
        {data ? (
          <WeatherContainer
            weather={data.weather[0]}
            main={data.main}
            wind={data.wind}
            clouds={data.clouds}
          />
        ) : (
          "Loading data..."
        )}
      </div>
    </div>
  );
}

export default App;
