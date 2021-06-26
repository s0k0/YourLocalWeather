import React, { useEffect, useState } from "react";
import config from "./config.json";
import "./App.css";

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
    humidty: number;
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

  useEffect(() => {
    const url = `${config.baseUrl}/data/2.5/weather?q=${location}&appid=${config.apiKey}&units=metric`;
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  return (
    <div className="App">
      <h1>Weather in: {location}</h1>
      <div className="weather">
        {data ? JSON.stringify(data) : "Loading data..."}
      </div>
    </div>
  );
}

export default App;
