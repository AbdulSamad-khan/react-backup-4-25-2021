import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions/";

class GoogleAuth extends React.Component {
  // state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "565513549512-353i26v7nufdc1me062u4jjmvvdhmd5m.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          // reference the googleauth object inorder to use methods of authentication
          this.auth = window.gapi.auth2.getAuthInstance();

          // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.onAuthChange(this.auth.isSignedIn.get());
          //event listner it will be invoked anytime user authentication status changes
          this.auth.isSignedIn.listen(this.onAuthChange); // it waits to listen
        });
    });
  }
  // callback event going to be trigger when the authentication status changes
  onAuthChange = (isSignedin) => {
    // this.setState({ isSignedIn: isSignedin });
    if (isSignedin) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };
  renderMessage() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button
          className="ui red google button"
          onClick={() => this.auth.signOut()}
        >
          <i className="google icon"></i>
          Sign out
        </button>
      );
    } else {
      return (
        <button
          className="ui red google button"
          onClick={() => this.auth.signIn()}
        >
          <i className="google icon"></i>
          Sign in with Google
        </button>
      );
    }
  }
  render() {
    return <div> {this.renderMessage()}</div>;
  }
}
const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }; // {auth: {isSignedIn}}
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
