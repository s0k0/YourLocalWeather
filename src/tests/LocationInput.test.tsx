import React from "react";
import { fireEvent, render } from "@testing-library/react";
import {
  LocationInput,
  LocationInputProps
} from "../components/LocationInput/LocationInput";

describe("LocationInput Component", () => {
  const mockSubmit = jest.fn();
  const testInput: LocationInputProps = {
    onSubmit: mockSubmit,
    placeholder: "Mock placeholder!"
  };

  test("renders input", () => {
    const input = render(
      <LocationInput
        onSubmit={testInput.onSubmit}
        placeholder={testInput.placeholder}
      />
    );
    expect(input).toMatchSnapshot();
  });

  test("uses submit callback on button click", () => {
    const { getByRole, getByPlaceholderText } = render(
      <LocationInput
        onSubmit={testInput.onSubmit}
        placeholder={testInput.placeholder}
      />
    );
    const locatioInput = getByPlaceholderText(testInput.placeholder);
    const submitButton = getByRole("button", { name: "Search" });

    fireEvent.change(locatioInput, { target: { value: 'Berlin' } })
    fireEvent.click(submitButton);
    
    expect(mockSubmit).toHaveBeenCalled();
  });
});
