const { Router } = require("express");
const express = require("express");
const Song = require("../models/songModel");

const router = express.Router();

// GET all songs
router.get("/", (req, res) => {
  res.json({ message: "GET all songs" });
});

// GET single song
router.get("/:id", (req, res) => {
  res.json({ message: "GET one song" });
});

// POST a new song
router.post("/", async (req, res) => {
  const { artist, songName, genre } = req.body;
  try {
    const song = await Song.create({ artist, songName, genre });
    res.status(200).json(song);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE a song
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a song" });
});

// UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a song" });
});

module.exports = router;
