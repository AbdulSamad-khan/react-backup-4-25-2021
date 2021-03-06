import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    console.log("userheader");
    console.log(this.props);
    const user = this.props.users.find((user) => user.id === this.props.userId);

    if (!user) {
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
