import React, { useEffect, useState } from "react";

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
}

export default Home;
