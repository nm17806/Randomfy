import React from "react";
import Table from "react-bootstrap/Table";

import selected from "../components/Checkbox"

function Playlist() {

  /*
  let songName = selected.songName;
  let artist = selected.artist;
  let genre = selected.genre;
  let spotifyLink = selected.spotifyLink;
  */

  function songNumber(){
    for(let i=1; selected.length; i++){
      return i;
    }
  };

  if(!selected){
    return(
      <div>
        <p>You don't have any mix selected.</p>
      </div>
    )

  }else{

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
            {
              selected.map((song) => (
                <tr key={song.id}>
                  <td>{songNumber}</td>
                  <td>{song.songName}</td>
                  <td>{song.artist}</td>
                  <td>{song.genre}</td>
                  <td>
                    <a href={song.spotifyLink}>
                      <img src="../img/spotify.png" alt="Spotify icon" />
                    </a>
                  </td>
                </tr>
              ))
            };
          </tbody>
        </Table>

        <hr></hr>
      </div>
    );
  }
};

export default Playlist;
