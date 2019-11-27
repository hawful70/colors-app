import React, { Component } from "react";
import MiniPalette from './MiniPalette';
import { Link } from "react-router-dom";

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>React Color</h1>
        {palettes.map(palette => (
          // <p>
          //   <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          // </p>
          <MiniPalette {...palette} />
        ))}
      </div>
    );
  }
}

export default PaletteList;
