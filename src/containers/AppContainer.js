import { connect } from "react-redux";

import App from "../App";
import { COMMON_ACTIONS } from "../actions/index";

const mapDispatchToProps = dispatch => ({
  componentShow: (showX) => dispatch(
  {
    type: COMMON_ACTIONS.COMPONENT_SHOW,
    payload: {
      showX
    }
  }
  ),
  componentHide: (showX) => dispatch(
    {
      type: COMMON_ACTIONS.COMPONENT_HIDE,
      payload: {
        showX
      }
    }
    ),
});

// TODO: putting anything in here causes infinite loops... whyyyyy!?!?!
const mapStateToProps = (state) => {
  return {
    fakeProps
    // ONCE WE GET REAL STATE GOING WE CAN DO STUFF
  }
}

// // PLAYGROUND OF FAKE PROPS SO I CAN TEST SHIT
const fakeProps = {
  displayConferences: true,
  displayForm: false,
  displayLoading: false
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
