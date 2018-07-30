import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

// Custom components
import AppHeader from "./components/AppHeader.js";
import AppTitle from "./components/AppTitle.js";
import Button from "./components/Button.js";
import EventsContainer from "./components/EventsContainer.js";
import PageTitle from "./components/PageTitle.js";
import Event from "./components/Event.js";
import Criteria from "./components/Criteria.js";

import { getAllConferences } from "./actions/index";

class App extends Component {
  componentDidMount() {
    // this is here as an example for how to connect to the backend
    // it should be removed once development has started
    this.props.healthCheck();
    this.props.getData();
  }
  
  render() {
    
    const { isLoading } = this.props;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <AppHeader>
          <AppTitle name="Call for Diversity" />
          <Button name="Submit Event" />
        </AppHeader>
        <EventsComponentContainer />
      </div>
    );
  }
}

const EventsComponent = ({ conferences }) => (
  <EventsContainer>
    <PageTitle name="Upcoming Events" />
    {
      conferences.map(conf => 
        <Event key={conf.event.id}>
          <Criteria>
            {conf.event.name}
          </Criteria>
        </Event>
      )
    }
  </EventsContainer>
);

const mapStateToProps = state => {

  const { conferences, isLoading } = state;

  return {
    conferences,
    isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(getAllConferences)
  }
}

const connectEventsToStore = connect(
  mapStateToProps,
  mapDispatchToProps
);

const EventsComponentContainer = connectEventsToStore(EventsComponent);

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
