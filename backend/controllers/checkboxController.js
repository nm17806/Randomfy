const Song = require("../models/songModel");
const mongoose = require("mongoose");

const rockSongs = async (req, res) => {
  const songs = await Song.find({ genre: "Rock" });

  res.status(200).json(songs);
};

const hiphopSongs = async (req, res) => {
  const songs = await Song.find({ genre: "HipHop" });

  res.status(200).json(songs);
};

module.exports = {
  rockSongs,
  hiphopSongs,
};
