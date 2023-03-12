import React from "react";

// import components
import { App } from "../components/Checkbox";
import Header from "../components/Header";
import Instructions from "../components/Instructions";

function Home() {
  return (
    <div className="Home">
      <Header />
      <Instructions />
      <App />
    </div>
  );
}

export default Home;
