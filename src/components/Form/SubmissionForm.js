import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SubmissionForm extends Component {
  render () {
    return (
      <form action="">
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text" />
        </div>
      </form>
    );
  }
}


const reduxifiedSubmissionForm = reduxForm({
  form: 'submission'
})

export default reduxifiedSubmissionForm(SubmissionForm);
