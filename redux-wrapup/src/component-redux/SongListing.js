import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions/";
const SongListing = (props) => {
  const renderSongs = props.songList.map((song, index) => {
    return (
      <div key={index}>
        <h1>Title: {song.title}</h1>
        <p>Singer: {song.singer}</p>
        <button onClick={() => props.selectSong(song)}>Select Me</button>
      </div>
    );
  });
  return <div>{renderSongs}</div>;
};

export default connect(null, { selectSong: selectSong })(SongListing);
