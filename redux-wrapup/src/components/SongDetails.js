import React from "react";

const SongDetails = (props) => {
  if (!props.song.title) {
    return (
      <div>
        <h1 style={{ color: "red" }}>{props.song}</h1>
      </div>
    );
  }
  return (
    <div>
      <h1 style={{ color: "red" }}>
        Here! The Select Song is {props.song.title}
      </h1>
    </div>
  );
};
export default SongDetails;
