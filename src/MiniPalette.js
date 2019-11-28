import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer"
    }
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "134px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem"
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.8px"
  }
};

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
