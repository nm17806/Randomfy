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
      <br></br>
    </div>
  );
};

export default SongDetails;
