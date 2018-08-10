import React, { Component } from "react";

import "./App.css";
import CssBaseline from '@material-ui/core/CssBaseline';

// Custom components
import PageContent from "./components/PageContent";
import AppHeader from "./components/AppHeader";
import PageTitle from "./components/PageTitle";
import FormContainer from "./components/Form/FormContainer";
import EventsContainer from "./containers/EventsContainer";

class App extends Component {


  render() {
    return (
      <div>
        <CssBaseline />
        <AppHeader />
        <PageContent>

          {/* SHOW WHEN SOMETHING IS LOADING */}
          <PageTitle name="Loading..." />
          {/* <Loading>Loading...</Loading> component of the future which can also be used in conferences */}

          {/* SHOW ON INITIAL LOAD AND WHEN FORM IS SUCCESSFULLY SUBMITTED AND NEW CONFERENCES ARE LOADED AGAIN */}
          <PageTitle name="Upcoming Events" />
          <EventsContainer />

          {/* SHOW WHEN SUBMIT EVENT BUTTON CLICKED --> REMEMBER TO HIDE THE BUTTON */}
          <PageTitle name="Submit an Event" />
          <FormContainer />

        </PageContent>
      </div>
    );
  }
}

export default App;
