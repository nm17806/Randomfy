import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";

// import components
import { App } from "../components/Checkbox";
import Header from "../components/Header";
import Instructions from "../components/Instructions";

function Home() {
  const { user } = useAuthContext();

  return (
    <div className="Home">
      <Header />
      <Instructions />
      <App />
    </div>
  );
}

export default Home;
