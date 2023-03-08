import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import './SongofHour.css';

const App = () => {
  return (
    <div>
      <h1>Video content that's always in sync with your day</h1>
      <h2>Join the Revolution with Ramdomfy </h2>
      <VideoPlayer autoPlay={true}/>
    </div>
  );
};

export default App;
