import React, { Component } from "react";
import { connect } from "react-redux";
import { dummyAction } from "./components/actions";

class Dummy extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1> dummy</h1>

        {setTimeout(() => {
          this.props.dummyAction("rafay");
        }, 200)}
      </div>
    );
  }
}

export default connect(
  (state) => {
    return state;
  },
  { dummyAction }
)(Dummy);
