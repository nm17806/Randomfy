import React from "react";
import "./Header.css";

function Header() {
  return (
    // This is a random logo for the purpose of creating a layout. This can be changed
    <div id="logoDiv">
      <img
        id="logo"
        src="https://img.freepik.com/premium-vector/note-music-logo-design_93835-645.jpg?w=2000"
        alt="Logo"
        height={150}
      />
    </div>
  );
}

export default Header;
