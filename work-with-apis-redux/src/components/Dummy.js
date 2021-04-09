import React from "react";
import { connect } from "react-redux";
class Dummy extends React.Component {
  render() {
    console.log("dummy");
    console.log(this.props);
    return <div> </div>;
  }
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Dummy);
