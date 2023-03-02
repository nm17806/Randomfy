import React from "react";

// import components
import Checkbox from "../components/Checkbox";
import Header from "../components/Header";
import Instructions from "../components/Instructions";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Instructions />
      <Checkbox />
    </div>
  );
}

export default Home;
