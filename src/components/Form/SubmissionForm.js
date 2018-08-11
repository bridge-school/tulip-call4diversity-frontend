import React from "react";
import { Field, reduxForm } from "redux-form";

import StyledTextField from "./TextInput";

import "react-widgets/dist/css/react-widgets.css";
import Moment from "moment";
import momentLocalizer from "react-widgets-moment";
import DateTimePicker from "react-widgets/lib/DateTimePicker";

import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

Moment.locale("en");
momentLocalizer();

export const SubmissionForm = props => (
  <form action="">
    <div className="form-block">
      <Field
        name="event-name"
        component={StyledTextField}
        type="text"
        label="Event Name"
      />
      <Field
        name="event-website"
        component={StyledTextField}
        type="url"
        label="Event Website"
      />
      {/* Date Picker */}
      {/* testing */}
      <DateTimePicker />
      <Field
        name="event-location"
        component={StyledTextField}
        type="text"
        label="Event Location"
      />
      <Divider />
    </div>
    <div className="form-block">
      {/* Date Picker */}
      {/* testing */}
      <DateTimePicker />
      <Field
        name="sub-website"
        component={StyledTextField}
        label="Submission Website"
      />

      <Field name={compensation} component={renderRadioButtonGroup(compensation, 'Are all speakers compensated at your event?')} />
      <Field name={codeOfConduct} component={renderRadioButtonGroup(codeOfConduct, 'Does your event have a publicly visible code of conduct?')} />
      <Field name={scholarship} component={renderRadioButtonGroup(scholarship, 'Does your event provide diversity scholarships?')} />
      
      <Divider />
    </div>
    <div className="form-block">
      <Field
        name="name"
        component={StyledTextField}
        type="text"
        label="Contact Name"
      />
      <Field
        name="email"
        component={StyledTextField}
        type="email"
        label="Contact Email"
      />
      <Divider />
    </div>
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

const onSubmit = (values) => {
  // postSubmissionForm(values);
};

export default reduxForm({ form: 'SubmissionForm', onSubmit })(SubmissionForm);