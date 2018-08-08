import React from "react";
import { Field, reduxForm } from "redux-form";
import { StyledTextField } from "./TextInput";
import Button from '@material-ui/core/Button';
import 'react-widgets/dist/css/react-widgets.css';
// import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import Globalize from 'globalize';
import globalizeLocalizer from 'react-widgets-globalize';
import { render } from 'react-dom';
import DropdownList from 'react-widgets/lib/DropdownList';

Globalize.locale('en')

globalizeLocalizer()

render(<DropdownList />, document.getElementById('app-root'))

export const SubmissionForm = props => (
  <form action="">
    <Field
      name="name"
      component={StyledTextField}
      type="text"
      label="Event Name"
    />
    <Field
      name="website"
      component={StyledTextField}
      type="text"
      label="Event Website"
    />
    {/* Date Picker */}
    {/* <DateTimePicker/> */}
    <Field
      name="location"
      component={StyledTextField}
      type="text"
      label="Event Location"
    />
    <Button
      type="submit" 
      disabled={props.pristine || props.submitting}
      variant="contained"
      color="primary"
    >
      Submit Event
    </Button>
    <Button 
      type="button" 
      disabled={props.pristine || props.submitting} 
      onClick={props.reset}
      variant="contained"
      color="grey"
    >
      Clear Values
    </Button>
  </form>
);

export const ReduxFormMaker = ({ name, formComponent, ...restProps }) => {
  const MyForm = reduxForm({ form: name })(formComponent);
  return <MyForm {...restProps} />;
};

