/**
 * @module: App.jsx
 * @description: Main container
 */

// !-- IMPORT MODULES --! //
import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actionCreator";

// !-- APP --! //
const App = props => {
  const { defaultMessage, changeText } = props;
  return (
    <div>
      <h1>Herein lies a React | Redux Boilerplate</h1>
      <em>{defaultMessage}</em>
      <br />
      <textarea onChange={changeText} value={defaultMessage} />
    </div>
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
