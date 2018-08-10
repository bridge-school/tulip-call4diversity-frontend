import React, { Component } from "react";
import Event from "./Event";


class EventsList extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { conferences, isLoading, hasErrors } = this.props;

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

      </div>
    );
  }
}

export default EventsList;
