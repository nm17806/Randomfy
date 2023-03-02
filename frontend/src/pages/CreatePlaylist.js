import React from "react";

// import components
import Playlist from "../components/Playlist";
import History from "../components/History";

function Home() {
  return (
    <div className="Home">
      <Playlist />
      <History />
    </div>
  );
}

export default Home;
