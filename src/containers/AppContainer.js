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
    //common: state.common
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
