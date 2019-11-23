import React, { Component } from "react";
import ColorBox from "./ColorBox";
import './Pallete.css'

class Pallete extends Component {
  render() {
    const colorBoxes = this.props.colors.map(color => {
      return <ColorBox key={color.name} background={color.color} name={color.name} />
    });
    return (
      <div className="Palette">
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default Pallete;
