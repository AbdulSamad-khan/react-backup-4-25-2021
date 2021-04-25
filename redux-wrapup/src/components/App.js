import React, { useState } from "react";
import SongList from "./SongList";
import SongDetails from "./SongDetails";
import SongListing from "../component-redux/SongListing";
import SongDetailing from "../component-redux/SongDetailing";
const App = () => {
  const [song, selectSong] = useState("No song Selected");
  const songList = [
    {
      title: "Still Dre",
      singer: "snoop Doog",
    },
    {
      title: "Gumaan",
      singer: "Young Stunner",
    },
  ];
  const anotherSongList = [
    {
      title: "Idols",
      singer: "Young Stunner",
    },
    {
      title: "Affsanay",
      singer: "Young stunner",
    },
  ];
  return (
    <div>
      <SongList list={songList} onSelectSong={selectSong} />
      <SongDetails song={song} />

      <SongListing songList={anotherSongList} />
      <SongDetailing />
    </div>
  );
};

export default App;
