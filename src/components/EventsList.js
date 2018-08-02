import React from "react";
import Event from "./Event";
import Criteria from "./Criteria";
import SubmissionForm from "./Form/SubmissionForm";

class EventsList extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { conferences, isLoading } = this.props;
    return (
      <div>
        {isLoading
          ? null
          : conferences.map(conference => (
              <Event key={conference.id}>

                <SubmissionForm /> 
                <Criteria>{conference.name}</Criteria>
              </Event>
            ))}
      </div>
    );
  }
}

export default EventsList;
