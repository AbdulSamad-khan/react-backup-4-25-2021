import React from "react";

const SongList = ({ list }) => {
  const renderList = list.map((song) => {
    return <div>{song}</div>;
  });
  return <div>{renderList}</div>;
};

export default SongList;
