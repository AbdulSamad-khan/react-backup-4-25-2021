import React, { Component } from "react";
import { connect } from "react-redux";
import SinglePost from "./SinglePost";
import { fetchPosts } from "../actions";

class Postlist extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderList = () => {
    return this.props.posts.map((post) => {
      return (
        <div>
          <h1> {post.title}</h1>
          <p> {post.body} </p>
          <SinglePost userId={post.userId} />
        </div>
      );
    });
  };
  render() {
    // console.log("PostList Component");
    // console.log(this.props.posts);
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchPosts })(Postlist);
