import React from "react";

export default function TemperatureVerdict({ temperature = 0 }) {
  if (temperature >= 100) {
    return <p>Water would boil</p>;
  }
  return <p>Water would not boil</p>;
}
