import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = { currentColor: "teal", newColorName: "" };
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", value =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", value =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  updateCurrentColor = newColor => {
    this.setState({ currentColor: newColor.hex });
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" });
  }

  render() {
    const { paletteIsFull, classes } = this.props;
    const { currentColor, newColorName } = this.state;  
    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
        />
        <ValidatorForm onSubmit={this.handleSubmit} ref='form'>
          <TextValidator
            onChange={this.handleChange}
            name="newColorName"
            value={newColorName}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "enter a color name",
              "color name must be unique",
              "Color already used"
            ]}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: paletteIsFull ? "grey" : currentColor }}
            type="submit"
            disabled={paletteIsFull}
          >
            {paletteIsFull ? "Palette full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default ColorPickerForm;
