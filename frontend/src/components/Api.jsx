import React, { useEffect, useState } from "react";

import SongDetails from "./SongDetails";

function Home() {
  const [songs, setSongs] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch("/api/songs/Indie");
      const json = await response.json();

      if (response.ok) {
        setSongs(json);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div className="home">
      <div className="songs">
        {songs &&
          songs.map((song) => <SongDetails key={song._id} song={song} />)}
      </div>
    </div>
  );
}

export default Home;
