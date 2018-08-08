import React from "react";
import Event from "./Event";
import FormContainer from "./Form/FormContainer";
import PageTitle from "./PageTitle";

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
            <Event key={conference.id} conference={conference}/>
          ))}

        {/* Form component is here for now, so we can see it in the front end */}
        <PageTitle name="Submit an Event" />
        <FormContainer />
      </div>
    );
  }
}

export default EventsList;
