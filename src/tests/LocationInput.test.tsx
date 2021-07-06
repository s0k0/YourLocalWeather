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
    const locationInput = getByPlaceholderText(testInput.placeholder);
    const submitButton = getByRole("button", { name: "Search" });

    fireEvent.change(locationInput, { target: { value: 'Berlin' } })
    fireEvent.click(submitButton);
    
    expect(mockSubmit).toHaveBeenCalled();
  });

  test("does not fire on empty input", () => {
    const { getByRole, getByPlaceholderText } = render(
      <LocationInput
        onSubmit={testInput.onSubmit}
        placeholder={testInput.placeholder}
      />
    );
    const locationInput = getByPlaceholderText(testInput.placeholder);
    const submitButton = getByRole("button", { name: "Search" });

    fireEvent.change(locationInput, { target: { value: '' } })
    fireEvent.click(submitButton);
    
    expect(mockSubmit).not.toHaveBeenCalled();
  });
});
