import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import "../pages/SongofHour.css";

///////////// asignar horario para reprodcucion de musica ////////////
////////// revisar codigo is playing para reprodcucion auto (1 warning)////
function VideoPlayer() {
  const [timeOfDay, setTimeOfDay] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    if (hour < 12) {
      setTimeOfDay("morning");
    } else if (hour >= 12 && hour < 18) {
      setTimeOfDay("afternoon");
    } else {
      setTimeOfDay("night");
    }
  }, []);
  //////////////// ID de los videos youtube////////////////
  const videosMorning = ["9UMxZofMNbA", "hlWiI4xVXKY", "iqmO1RlqorU"];
  ///////// pendiente modificae ID youtube elegir videos para la tarde y la noche
  const videosAfternoon = ["IUl7su3j1Eo&ab", "L8hPtjGb3R0", "2ig28K45I90"];
  const videosNight = ["GawAvQTYVCE", "Wx55dpPMVX0", "kKaF-sjG06g"];
  //////////////Codigo para que sean random los videos////////////
  const getRandomVideo = (videos) => {
    return videos[Math.floor(Math.random() * videos.length)];
  };

  const getVideoSource = () => {
    if (timeOfDay === "morning") {
      return getRandomVideo(videosMorning);
    } else if (timeOfDay === "afternoon") {
      return getRandomVideo(videosAfternoon);
    } else {
      return getRandomVideo(videosNight);
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      mute: 0, // cambiar de 1 a 0 para quitar el mute
      loop: 1,
      controls: 1,
    },
  };

  return (
    <div className="player-wrapper">
      <YouTube
        videoId={getVideoSource()}
        opts={opts}
        onPlay={handlePlay}
        onPause={handlePause}
      />
    </div>
  );
}

export default VideoPlayer;
