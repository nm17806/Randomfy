import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import '../App.css';

///////////// asignar horario para reprodcucion de musica/mostrar el rep-video ////////////
function VideoPlayer() {
  const [timeOfDay, setTimeOfDay] = useState('');
  const [lastVideoId] = useState(''); // nuevo estado para guardar el último ID de video reproducido
  const [isPlaying, setIsPlaying] = useState(true);


   useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    if (hour < 12) {
      setTimeOfDay('morning');
    } else if (hour >= 12 && hour < 18) {
      setTimeOfDay('afternoon');
    } else {
      setTimeOfDay('night');
    }
  }, []);

  //////////////// ID de los videos youtube////////////////
  const videosMorning = [
    'EmRwe-oY3VQ',//ok
    'ushOXEf7Fzc',//ok
    'TMb0Q7O6nN4',//ok
    'JsuqnzqZimQ',//ok
    'APFMvzH1WEE'//ok
  ];

  const videosAfternoon = [
    'IRyJe-0Uie0',
    'IUl7su3j1Eo',
    '2ig28K45I90',
    'CpNBODqTA34',
    '5mFTXbZzOAE'
  ];

  const videosNight = [
    'Zkgzg5wK-4A',
    'n9Y2Eb4BaSg',
    'apcTjWv4d08',
    '33Xe3z8L73A',
    'NgN12_xNHb0'
  ];

  //////////////Codigo para que sean random los videos////////////
  const getRandomVideo = (videos) => {
    let randomVideo = null;
    do {
      randomVideo = videos[Math.floor(Math.random() * videos.length)];
    } while (randomVideo === lastVideoId); // asegurarse de que el video seleccionado al azar no sea el mismo que el último reproducido
    return randomVideo;
  };

  const getVideoSource = () => {
    let videos = [];
    if (timeOfDay === 'morning') {
      videos = videosMorning;
    } else if (timeOfDay === 'afternoon') {
      videos = videosAfternoon;
    } else {
      videos = videosNight;
    }
    return getRandomVideo(videos);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };
////parameter video///
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      mute: 0,  //cambiar de 1 a 0 para quitar el mute
      loop: 1,
      controls: 1
    }
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
