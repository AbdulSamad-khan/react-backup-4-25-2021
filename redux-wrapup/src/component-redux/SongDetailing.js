import React from "react";
import { connect } from "react-redux";
const SongDetailing = (props) => {
  if (!props.song.title) {
    return (
      <div>
        {" "}
        <h1>Song is not selected yet</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Here! Selected Song is {props.song.title}</h1>
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(SongDetailing);
