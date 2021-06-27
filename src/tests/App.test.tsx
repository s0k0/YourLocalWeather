import { render } from "@testing-library/react";
import App from "../App";

describe("Your Weather App", () => {
  test("renders headline", () => {
    const { getByText } = render(<App />);
    const headlineElement = getByText(/Weather in/i);
    expect(headlineElement).toBeInTheDocument();
  });
});
