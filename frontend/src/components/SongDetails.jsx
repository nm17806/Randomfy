import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

const SongDetails = ({ song }) => {
  return (
    <div className="song-details">
      <p>
        <strong>Song: </strong>
        {song.songName}
      </p>
      <p>
        <strong>Artist: </strong>
        {song.artist}
      </p>
      <p>
        <strong>Genre: </strong>
        {song.genre}
      </p>
      <a href={song.linkSpotify} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faSpotify} size="2x" />
      </a>
      <br></br>
      <br></br>
    </div>
  );
};

export default SongDetails;
