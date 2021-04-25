import React from "react";

const SongList = (props) => {
  const renderSongList = props.list.map((song, index) => {
    return (
      <div key={index}>
        <h2>Title: {song.title}</h2>
        <p>Singer: {song.singer}</p>
        <button onClick={() => props.onSelectSong(song)}>Select Song</button>
      </div>
    );
  });
  return <div>{renderSongList}</div>;
};

export default SongList;
