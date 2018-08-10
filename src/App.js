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
          <PageTitle name="Upcoming Events" />
          <EventsContainer />
        </PageContent>
        <PageContent>
          {/* Form component is here for now, so we can see it in the front end */}
          <PageTitle name="Submit an Event" />
          <FormContainer />
        </PageContent>
      </div>
    );
  }
}

export default App;
