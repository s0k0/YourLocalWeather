import React, { useState } from "react";
import "./LocationInput.css";

export interface LocationInputProps {
  placeholder: string;
  onSubmit: (input: string) => void;
}

const LocationInput = (props: LocationInputProps) => {
  const [input, setInput] = useState<string>("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (input !== "") props.onSubmit(input);
  };
  return (
    <form className="location-form" onSubmit={handleSubmit}>
      <label id="location-label">Choose a Location:</label>
      <input
        id="location-input"
        value={input}
        onChange={event => setInput(event.target.value)}
        placeholder={props.placeholder}
      />
      <input id="location-submit" type="submit" value="Search" />
    </form>
  );
};

export { LocationInput };
