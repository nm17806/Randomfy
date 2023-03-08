import React, { useEffect, useState } from "react";

// import components
import Playlist from "../components/Playlist";
import History from "../components/History";

function playlistMaker() {

  const [songs, setPlaylist] = useState([])

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch("/api/songs") 
      const json =  await response.json()
    } 
    fetchSongs()
  }, [songs])

  //function setPlaylist() {}

  return (
    <div className="Home">
      <Playlist />
      <History />
    </div>
  );
}

export default playlistMaker;
