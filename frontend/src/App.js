import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages $ components
import Home from "./pages/Home";
import CreatePlaylist from "./pages/CreatePlaylist";
import SongofHour from "./pages/SongofHour";
import Navbar1 from "./components/Navbar1";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar1 />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<CreatePlaylist />} />
            <Route path="/songofthehour" element={<SongofHour />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
