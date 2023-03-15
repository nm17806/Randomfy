import React, { useState } from "react";

// import components
import { selection } from "../components/Checkbox";
import {
  RockSongs,
  HipHopSongs,
  PopSongs,
  PunkSongs,
  MetalSongs,
  ClassicalSongs,
  ElectronicSongs,
  ReggaetonSongs,
  IndieSongs,
  SeventiesSongs,
  EightiesSongs,
  NinetiesSongs,
  TwoThousandsSongs,
  TwentyTenSongs,
  TwentyTwentySongs,
} from "../components/Api";

// fetch songs

function Home() {
  
  function FetchedSongs() {
    return (
      <div>
        {selection["1"] && <RockSongs />}
        {selection["2"] && <HipHopSongs />}
        {selection["3"] && <PopSongs />}
        {selection["4"] && <PunkSongs />}
        {selection["5"] && <MetalSongs />}
        {selection["6"] && <ClassicalSongs />}
        {selection["7"] && <ElectronicSongs />}
        {selection["8"] && <ReggaetonSongs />}
        {selection["9"] && <IndieSongs />}
        {selection["10"] && <SeventiesSongs />}
        {selection["11"] && <EightiesSongs />}
        {selection["12"] && <NinetiesSongs />}
        {selection["13"] && <TwoThousandsSongs />}
        {selection["14"] && <TwentyTenSongs />}
        {selection["15"] && <TwentyTwentySongs />}
      </div>
    );
  };

  const [saved, isSaved] = useState();
  function handleOnClick(){
    isSaved(!saved)
  };

  function Favourites(){
    if(saved){
      return(
        <FetchedSongs />
      )
    }else{
      return(
        <p>You haven't saved any Favourites yet</p>
      )
    }
  }

  return (
    <div>

      <button onClick={handleOnClick}>Save to Favourites</button>

      <FetchedSongs />

      <br></br>
      <hr></hr>
      <br></br>

      <h4>Favourites</h4>
      <br></br>
      <Favourites />

    </div>
  );
};

export default Home;
