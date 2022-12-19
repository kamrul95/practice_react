import React, { Component } from "react";
import { convert, toCelsius, toFahrenheit } from "../lib/converter";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

export default class Calculator extends Component {
  state = { temperature: "", scale: "c" };

  handleChange = (e, scale) => {
    console.log(e.target.value);
    this.setState({ temperature: e.target.value, scale: scale });
  };
  render() {
    const { temperature, scale } = this.state;

    const celsius =
      scale === "f" ? convert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? convert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          handleTemperature={this.handleChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          handleTemperature={this.handleChange}
        />
        {/* TemperatureVerdict */}
        <BoilingVerdict temperature={parseFloat(celsius)}/>
      </div>
    );
  }
}
