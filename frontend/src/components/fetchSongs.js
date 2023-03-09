import { useEffect, useState } from "react";

function RockSongs() {
  const [songs, setSongs] = useState();

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch("/api/Rock");
      const json = await response.json();
      setSongs(json);
    };

    fetchSongs();
  }, []);

  return JSON.parse(songs);
}

function HipHopSongs() {
  const [songs, setSongs] = useState();

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch("/api/HipHop");
      const json = await response.json();
      setSongs(json);
    };

    fetchSongs();
  }, []);

  return JSON.parse(songs);
}

function PopSongs() {
  const [songs, setSongs] = useState();

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch("/api/Pop");
      const json = await response.json();
      setSongs(json);
    };

    fetchSongs();
  }, []);

  return JSON.parse(songs);
}

function PunkSongs() {
  const [songs, setSongs] = useState();

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch("/api/Punk");
      const json = await response.json();
      setSongs(json);
    };

    fetchSongs();
  }, []);

  return JSON.parse(songs);
}

function MetalSongs() {
  const [songs, setSongs] = useState();

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch("/api/Metal");
      const json = await response.json();
      setSongs(json);
    };

    fetchSongs();
  }, []);

  return JSON.parse(songs);
}

function ClassicalSongs() {
  const [songs, setSongs] = useState();

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch("/api/Classical");
      const json = await response.json();
      setSongs(json);
    };

    fetchSongs();
  }, []);

  return JSON.parse(songs);
}

function ElectronicSongs() {
  const [songs, setSongs] = useState();

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch("/api/Electronic");
      const json = await response.json();
      setSongs(json);
    };

    fetchSongs();
  }, []);

  return JSON.parse(songs);
}

function ReggaetonSongs() {
  const [songs, setSongs] = useState();

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch("/api/Reggaeton");
      const json = await response.json();
      setSongs(json);
    };

    fetchSongs();
  }, []);

  return JSON.parse(songs);
}

function IndieSongs() {
  const [songs, setSongs] = useState();

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch("/api/Indie");
      const json = await response.json();
      setSongs(json);
    };

    fetchSongs();
  }, []);

  return JSON.parse(songs);
}

function SeventiesSongs() {
  const [songs, setSongs] = useState();

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch("/api/Seventies");
      const json = await response.json();
      setSongs(json);
    };

    fetchSongs();
  }, []);

  return JSON.parse(songs);
}

function EightiesSongs() {
  const [songs, setSongs] = useState();

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch("/api/Eighties");
      const json = await response.json();
      setSongs(json);
    };

    fetchSongs();
  }, []);

  return JSON.parse(songs);
}

function NinetiesSongs() {
  const [songs, setSongs] = useState();

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch("/api/Nineties");
      const json = await response.json();
      setSongs(json);
    };

    fetchSongs();
  }, []);

  return JSON.parse(songs);
}

function TwothousandsSongs() {
  const [songs, setSongs] = useState();

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch("/api/TwoThousands");
      const json = await response.json();
      setSongs(json);
    };

    fetchSongs();
  }, []);

  return JSON.parse(songs);
}

function TwentytenSongs() {
  const [songs, setSongs] = useState();

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch("/api/TwentyTen");
      const json = await response.json();
      setSongs(json);
    };

    fetchSongs();
  }, []);

  return JSON.parse(songs);
}

function TwentytwentySongs() {
  const [songs, setSongs] = useState();

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch("/api/TwentyTwenty");
      const json = await response.json();
      setSongs(json);
    };

    fetchSongs();
  }, []);

  return JSON.parse(songs);
}

export {
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
  TwothousandsSongs,
  TwentytenSongs,
  TwentytwentySongs,
};
