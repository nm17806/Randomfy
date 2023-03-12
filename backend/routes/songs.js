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
const {
  rockSongs,
  hiphopSongs,
  popSongs,
  punkSongs,
  metalSongs,
  classicalSongs,
  electronicSongs,
  reggaetonSongs,
  indieSongs,
  seventiesSongs,
  eightiesSongs,
  ninetiesSongs,
  twothousandsSongs,
  twentytenSongs,
  twentytwentySongs,
} = require("../controllers/checkboxController");

// GET all songs
router.get("/", getAllSongs);

// Get genres
router.get("/Rock", rockSongs);
router.get("/HipHop", hiphopSongs);
router.get("/Pop", popSongs);
router.get("/Punk", punkSongs);
router.get("/Metal", metalSongs);
router.get("/Classical", classicalSongs);
router.get("/Electronic", electronicSongs);
router.get("/Reggaeton", reggaetonSongs);
router.get("/Indie", indieSongs);
router.get("/Seventies", seventiesSongs);
router.get("/Eighties", eightiesSongs);
router.get("/Nineties", ninetiesSongs);
router.get("/TwoThousands", twothousandsSongs);
router.get("/TwentyTen", twentytenSongs);
router.get("/TwentyTwenty", twentytwentySongs);

// GET single song
router.get("/:id", getOneSong);

// POST a new song
router.post("/", createSong);

// DELETE a song
router.delete("/:id", deleteOneSong);

// UPDATE a workout
router.patch("/:id", updateSong);

// GET genres

module.exports = router;
