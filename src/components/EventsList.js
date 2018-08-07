import React from "react";

import Event from "./Event";

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
      </div>
    );
  }
}

export default EventsList;
