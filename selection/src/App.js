import React, { useState } from "react";
import SongList from "SongList";
const songList = [
  {
    title: "Still Dre",
    singer: "Snoop Doog",
  },
  {
    title: "Gumaan",
    singer: "YoungStunner",
  },
];

const App = () => {
  return (
    <div>
      <h1>App Component</h1>
      <SongList list={songList} />
    </div>
  );
};

export default App;
