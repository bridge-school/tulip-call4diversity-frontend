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

// Actions
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

    return (
      <div>
        <AppHeader>
          <AppTitle name="Call for Diversity" />
          <Button name="Submit Event" />
        </AppHeader>
        {
          isLoading
          ? <p>Loading...</p>
          : <EventsComponentContainer />
        }
      </div>
    );
  }
}

// Mapping state and dispatch
// to props and connecting them
// --> To be extracted out into separate containers file?
const EventsComponent = ({ conferences }) => (
  <EventsContainer>
    <PageTitle name="Upcoming Events" />
    {
      conferences.map(conference => 
        <Event key={conference.id}>
          <Criteria>
            {conference.name}
          </Criteria>
        </Event>
      )
    }
  </EventsContainer>
);

const mapStateToProps = state => {

  const { conferences, isLoading } = state.conferenceReducer;

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
