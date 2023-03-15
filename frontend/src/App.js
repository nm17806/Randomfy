import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//pages $ components
import Home from "./pages/Home";
import CreatePlaylist from "./pages/CreatePlaylist";
import SongofHour from "./pages/SongofHour";
import Navbar1 from "./components/Navbar1";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar1 />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route path="/favourites" element={<CreatePlaylist />} />
            <Route path="/songofthehour" element={<SongofHour />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
