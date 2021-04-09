import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class SinglePost extends Component {
  componentDidMount() {
    this.props.fetchUsers(this.props.userId);
  }
  render() {
    // console.log("SinglePost Component");
    console.log(this.props);
    const user = this.props.users.find((user) => user.id === this.props.userId);

    if (!user) {
      return null;
    } else {
      return <div>{user.name}</div>;
    }
  }
}
const mapStateToProps = (state) => {
  return { users: state.users };
};
export default connect(mapStateToProps, { fetchUsers })(SinglePost);
