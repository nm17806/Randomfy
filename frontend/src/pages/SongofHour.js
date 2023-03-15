import React from 'react';
import VideoPlayer from './components/VideoPlayer';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="title">Video content that's always in sync with your day.</h1>
      <h2 className="subtitle">Join the Revolution with Randomfy </h2>
      <VideoPlayer autoPlay={true}/>
    </div>
  );
};

export default App;
