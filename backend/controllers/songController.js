const Song = require("../models/songModel");
const mongoose = require("mongoose");

// GET all songs
const getAllSongs = async (req, res) => {
  const songs = await Song.find({});

  res.status(200).json(songs);
};

// Get 5 Indie Genre songs
const getIndieRandom = async (req, res) => {
  const songs = await Song.aggregate([
    { $match: { genre: "Indie" } },
    { $sample: { size: 5 } },
  ]);

  res.status(200).json(songs);
};

// GET single song
const getOneSong = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Song" });
  }

  const song = await Song.findById(id);

  if (!song) {
    return res.status(404).json({ error: "No Such Song" });
  }
  res.status(200).json(song);
};

// POST a new song
const createSong = async (req, res) => {
  const { artist, songName, genre } = req.body;

  // add doc to DB
  try {
    const song = await Song.create({ artist, songName, genre });
    res.status(200).json(song);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE a song
const deleteOneSong = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Song" });
  }

  const song = await Song.findOneAndDelete({ _id: id });

  if (!song) {
    return res.status(404).json({ error: "No Such Song" });
  }
  res.status(200).json(song);
};
// UPDATE a song
const updateSong = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Song" });
  }

  const song = await Song.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  res.status(200).json(song);
};

module.exports = {
  createSong,
  getAllSongs,
  getOneSong,
  deleteOneSong,
  updateSong,
  getIndieRandom,
};
