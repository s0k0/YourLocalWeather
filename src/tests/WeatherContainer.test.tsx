import { render } from "@testing-library/react";
import {
  WeatherContainer,
  WeatherData
} from "../components/WeatherContainer/WeatherContainer";

describe("WeatherContainer", () => {
  const testData: WeatherData = {
    weather: {
      id: 123,
      main: "Cloudy",
      description: "Small chance for sun"
    },
    main: {
      temp: 20,
      feels_like: 21,
      humidity: 66
    },
    wind: {
      speed: 3,
      deg: 320
    },
    clouds: {
      all: 90
    }
  };
  test("renders weather data", () => {
    const container = render(
      <WeatherContainer
        weather={testData.weather}
        main={testData.main}
        wind={testData.wind}
        clouds={testData.clouds}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
