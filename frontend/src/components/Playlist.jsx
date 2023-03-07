import React from "react";
import Table from "react-bootstrap/Table";

const Song = require("../models/songModel");
const mongoose = require("mongoose");

function Playlist({Song}) {
 
  this.songName = 

  return this.state.Song.map((song, index) => {
    const {songName, artist, genre, spotifyLink} = song
    return (
      <tr>
        <td>1</td>
        <td>{songName}</td>
        <td>{artist}</td>
        <td>{genre}</td>
        <td>
          <a href={spotifyLink}>
            <img src="./img/spotify.png" alt="Spotify icon" />
          </a>
        </td>
      </tr>
    )
  })
  //option 1 
  /* function songNumber(){
    for(let i=1; {song}; i++){
      return i;
    }
  }; 

  //option 2
  const [number, addNumber] = React.useState(0);
  function SongNumber() {
    addNumber(number + 1);
  }
  */

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Spotify Link</th>
          </tr>
        </thead>
        
        <tbody>
              <tr>
                <td>{i}</td>
                <td>{songs.songName}</td>
                <td>{songs.artist}</td>
                <td>{songs.genre}</td>
                <td>
                  <a href={spotifyLink}>
                    <img src="./img/spotify.png" alt="Spotify icon" />
                  </a>
                </td>
              </tr>
              };
          }
        </tbody>
      </Table>

      <hr></hr>
    </div>
  );
}

export default Playlist;
