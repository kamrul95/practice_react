import React from 'react';

const scales = {
  c: 'Celsius',
  f: 'Fahrenheit',
}
export default function TemperatureInput(props) {
  const { temperature, scale, handleTemperature} = props;
  return (
    <div>
      <fieldset>
        <legend>Enter {scales[scale]} temperature</legend>
        <input type="text" value={temperature} onChange={(e) => handleTemperature(e, scale)}/>
      </fieldset>
    </div>
  )
}
