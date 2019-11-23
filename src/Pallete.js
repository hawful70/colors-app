import React, { Component } from "react";
import ColorBox from "./ColorBox";
import 'rc-slider/assets/index.css';
import "./Pallete.css";
import Slider from "rc-slider";

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
    const colorBoxes = colors[level].map(color => {
      return (
        <ColorBox key={color.name} background={color.hex} name={color.name} />
      );
    });
    return (
      <div className="Palette">
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            onAfterChange={this.changeColor}
            step={100}
          />
        </div>

        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default Pallete;
