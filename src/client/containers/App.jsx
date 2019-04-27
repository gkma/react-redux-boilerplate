import React from "react";
import { connect } from "react-redux";

import * as actions from "../actions/actionCreator";

const App = props => {
  const { defaultMessage, changeText } = props;
  return (
    <div>
      <h1>Herein lies a React | Redux Boilerplate</h1>
      <em>{defaultMessage}</em>
      <br />
      <textarea onChange={changeText} defaultValue={defaultMessage} />
    </div>
  );
};

const mapStateToProps = state => ({
  defaultMessage: state.form.defaultMessage
});

const mapDispatchToProps = dispatch => ({
  changeText: e => dispatch(actions.changeText(e.target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
