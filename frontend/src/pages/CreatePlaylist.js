import React, { useEffect, useState } from "react";

// import components
import Playlist from "../components/Playlist";
import History from "../components/History";
import SongDetails from "../components/SongDetails";
import { selection } from "../components/Checkbox";
import { RockSongs, HipHopSongs } from "../components/Api";

// fetch songs

function Home() {
  return (
    <div>
      {selection["1"] && <RockSongs />}
      {selection["2"] && <HipHopSongs />}
    </div>
  );
}

export default Home;
