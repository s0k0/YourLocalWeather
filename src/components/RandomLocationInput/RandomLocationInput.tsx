import randomLocation from 'random-location'
import "./RandomLocationInput.css";

export interface LocationCoordinates {
  latitude: number;
  longitude: number;
}

export interface RandomLocationInputProps {
  onClick: (position: LocationCoordinates) => void;
}

const RandomLocationInput = (props: RandomLocationInputProps) => {
  const center: LocationCoordinates = {
    latitude: 13.4050,
    longitude: 52.5200
  }

  const radius = 500000

  const handleOnClick = (event: any) => {
    event.preventDefault();
    const postion: LocationCoordinates = randomLocation.randomCirclePoint(center, radius)
    props.onClick(postion)
  };
  return (
    <div>
      <label id="random-location-label">Get a random place in Europe:</label>
      <button className="random-location-button" onClick={handleOnClick}>Random</button>
    </div>
  );
};

export { RandomLocationInput };
