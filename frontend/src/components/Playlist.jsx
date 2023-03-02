import React from "react";
import Table from "react-bootstrap/Table";

function Playlist() {
  const [number, addNumber] = React.useState(0);
  function SongNumber() {
    addNumber(number + 1);
  }

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
            <td>{/*data.map(SongNumber)*/}</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>
              <a href="https://open.spotify.com/episode/0F4fXEeAOBxUhuOaVeqAQE?si=7f735e05c6144f1d">
                <img src="./img/spotify.png" alt="Spotify icon" />
              </a>
            </td>
          </tr>
        </tbody>
      </Table>

      <hr></hr>
    </div>
  );
}

export default Playlist;
