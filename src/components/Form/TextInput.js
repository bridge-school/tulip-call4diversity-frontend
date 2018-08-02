import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export const StyledTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => {
  return (
    <TextField
      type="text"
      margin="normal"
      label={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  );
};
