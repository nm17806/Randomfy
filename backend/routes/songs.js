const { Router } = require("express");
const express = require("express");
const {
  createSong,
  getAllSongs,
  getOneSong,
  deleteOneSong,
  updateSong,
  getIndieRandom,
} = require("../controllers/songController");
const router = express.Router();

// GET all songs
router.get("/", getAllSongs);

// Get 5 random Indie Songs
router.get("/Indie", getIndieRandom);

// GET single song
router.get("/:id", getOneSong);

// POST a new song
router.post("/", createSong);

// DELETE a song
router.delete("/:id", deleteOneSong);

// UPDATE a workout
router.patch("/:id", updateSong);

module.exports = router;
