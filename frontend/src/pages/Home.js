import React from "react";

// import components
import Checkbox from "../components/Checkbox";
import Header from "../components/Header";
import Instructions from "../components/Instructions";
import Playlist from "./playlist";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Instructions />
      <Checkbox />
      <Playlist />
    </div>
  );
}

export default Home;
