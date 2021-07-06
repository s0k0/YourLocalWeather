import { render , screen } from "@testing-library/react";
import fetch from "jest-fetch-mock"
import App from "../App";

describe("Your Weather App", () => {
  test("renders headline", () => {
    const { getByText } = render(<App />);
    const headlineElement = getByText(/Weather in/i);
    expect(headlineElement).toBeInTheDocument();
  });

  /* test("renders loading", async () => {
    fetch.mockReject(req =>
      Promise.reject('invalid content type')
    )
    render(<App />);
    await errorElement(()=> screen.getByText(/Loading data.../i));
    //expect(errorElement).toBeInTheDocument();
    expect(screen).toMatchSnapshot();
  }); */
});
