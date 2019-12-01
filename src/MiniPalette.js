import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/MiniPaletteStyles";

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map(item => (
    <div 
      className={classes.miniColor}
      style={{ backgroundColor: item.color }}
      key={item.name}
    />
  ));

  const handleClick = () => {
    props.handleClick(props.id);
  }
  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.colors}>
        {miniColorBoxes}
      </div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
