import React, { useEffect, useState } from "react";
import "./App.css";
import { WeatherContainer } from "./components/WeatherContainer/WeatherContainer";
import { LocationInput } from "./components/LocationInput/LocationInput";
import {
  RandomLocationInput,
  LocationCoordinates
} from "./components/RandomLocationInput/RandomLocationInput";
import { createUrlFromLocation } from "./helpers";

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
  const [location, setLocation] = useState<string | LocationCoordinates>(
    "Berlin"
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getWeatherData(location);
  }, [location]);

  const getWeatherData = (location: string | LocationCoordinates) => {
    setLoading(true);
    const url = createUrlFromLocation(location);
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        data.cod === "404" ? setData(null) : setData(data);
        setLoading(false);
      });
  };

  const onLocationChange = (value: string | LocationCoordinates) => {
    setLocation(value);
    getWeatherData(value);
  };

  const headline =
    typeof location === "string"
      ? location
      : `(lat ${location.latitude.toFixed(2)}, lon ${location.longitude.toFixed(
          2
        )})`;

  return (
    <main className="App">
      <h1>Weather in: "{headline}"</h1>
      <section className="location-section">
          <LocationInput
            placeholder="Type city or region"
            onSubmit={onLocationChange}
          />
          <RandomLocationInput onClick={onLocationChange} />
      </section>
      <section className="weather-section">
        {loading ? (
          <p>Loading data...</p>
        ) : data?.weather ? (
          <WeatherContainer
            weather={data.weather[0]}
            main={data.main}
            wind={data.wind}
            clouds={data.clouds}
          />
        ) : (
          <div>
            <p> No data found :(.</p>
            <p> Search for another location instead!</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
