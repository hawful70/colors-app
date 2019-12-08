import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors } = props;
  const miniColorBoxes = colors.map(item => (
    <div
      className={classes.miniColor}
      style={{ backgroundColor: item.color }}
      key={item.name}
    />
  ));

  const deletePalette = (e) => {
    e.stopPropagation();
    props.openDialog(props.id);
  }  

  const handleClick = () => {
    props.goToPalette(props.id);
  };
  return (
    <div className={classes.root} onClick={handleClick}>
      <DeleteIcon
        className={classes.deleteIcon}
        style={{ transition: "all 0.3s ease-in-out" }}
        onClick={deletePalette}
      />
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
