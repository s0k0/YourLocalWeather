import React from "react";
import { fireEvent, render } from "@testing-library/react";
import {
  RandomLocationInput,
  RandomLocationInputProps
} from "../components/RandomLocationInput/RandomLocationInput";

describe("RandomLocationInput Component", () => {
  const mockClick = jest.fn();
  const testInput: RandomLocationInputProps = {
    onClick: mockClick
  };

  test("renders random input", () => {
    const randomInput = render(
      <RandomLocationInput onClick={testInput.onClick} />
    );
    expect(randomInput).toMatchSnapshot();
  });

  test("uses onClick callback on button click", () => {
    const { getByRole } = render(
      <RandomLocationInput onClick={testInput.onClick} />
    );
    const submitButton = getByRole("button", { name: "Random" });

    fireEvent.click(submitButton);

    expect(mockClick).toHaveBeenCalled();
  });
});
