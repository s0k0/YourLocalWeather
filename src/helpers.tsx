const formatTemperature = (value: number): string => {
  return `${Math.round(value)}°C`;
};

const formatWind = (value: number): string => {
  return `${Math.round(value)} m/s`;
};

export { formatTemperature, formatWind };
