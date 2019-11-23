import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Pallete.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

class Pallete extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
  }

  changeColor = level => {
    this.setState({ level });
  };

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map(
      color => {
        return (
          <ColorBox key={color.name} background={color.hex} name={color.name} />
        );
      }
    );
    return (
      <div className="Palette">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          onAfterChange={this.changeColor}
          step={100}
        />
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default Pallete;
