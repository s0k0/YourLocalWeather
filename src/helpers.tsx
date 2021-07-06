import config from "./config.json";
import { LocationCoordinates } from "./components/RandomLocationInput/RandomLocationInput";

const formatTemperature = (value: number): string => {
  return `${Math.round(value)}°C`;
};

const formatWind = (value: number): string => {
  return `${Math.round(value)} m/s`;
};

const createUrlFromLocation = (
  location: string | LocationCoordinates
): string => {
  const place =
    typeof location === "string"
      ? `q=${location}`
      : `lat=${location.latitude}&lon=${location.longitude}`;
  const url = `${config.baseUrl}/data/2.5/weather?${place}&appid=${config.apiKey}&units=${config.units}`;
  return url;
};

export { formatTemperature, formatWind, createUrlFromLocation };
