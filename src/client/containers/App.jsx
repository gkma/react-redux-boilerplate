/**
 * @module: App.jsx
 * @description: Main container
 */

// !-- IMPORT MODULES --! //
import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import * as actions from "../actions/actionCreator";

// !-- IMPORT COMPONENTS --! //
import FormContainer from "./FormContainer";

// APP: Main web app

const App = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={FormContainer} />
    </React.Fragment>
  );
};

// Receives state from the store and passes into component as "props"
const mapStateToProps = state => ({
  defaultMessage: state.form.defaultMessage
});

// Receives dispatch so when function is called, sends action to reducer to change store
const mapDispatchToProps = dispatch => ({
  changeText: e => dispatch(actions.changeText(e.target.value))
});

// Provides component with access to store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// const { defaultMessage, changeText } = props;
/* <em>{defaultMessage}</em>
<br />
<textarea onChange={changeText} value={defaultMessage} /> */
