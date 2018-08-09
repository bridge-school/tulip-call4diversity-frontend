import React, { Component } from "react";
import Event from "./Event";
import {
  ReduxFormMaker,
  SubmissionForm
} from "../components/Form/SubmissionForm";


class EventsList extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { conferences, isLoading, hasErrors } = this.props;
    console.log(this.props);
    return (
      <div>
        {isLoading
          ? "Loading..."
          : hasErrors
            ? "Oops! Something went wrong"
            : conferences.length === 0
              ? "There are currently no conferences coming up. Stay tuned!"
              : conferences.map(conference => (
                <Event key={conference.id} conference={conference} />
              ))
        }
        {/* Form component is here for now, so we can see it in the front end */}
        <ReduxFormMaker
          name={`SubmissionForm`}
          formComponent={SubmissionForm}
        />
      </div>
    );
  }
}

export default EventsList;
