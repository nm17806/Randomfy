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

const popSongs = async (req, res) => {
  const songs = await Song.find({ genre: "Pop" });

  res.status(200).json(songs);
};

const punkSongs = async (req, res) => {
  const songs = await Song.find({ genre: "Punk" });

  res.status(200).json(songs);
};

const metalSongs = async (req, res) => {
  const songs = await Song.find({ genre: "Metal" });

  res.status(200).json(songs);
};

const classicalSongs = async (req, res) => {
  const songs = await Song.find({ genre: "Classical" });

  res.status(200).json(songs);
};

const electronicSongs = async (req, res) => {
  const songs = await Song.find({ genre: "Electronic" });

  res.status(200).json(songs);
};

const reggaetonSongs = async (req, res) => {
  const songs = await Song.find({ genre: "Reggaeton" });

  res.status(200).json(songs);
};

const indieSongs = async (req, res) => {
  const songs = await Song.find({ genre: "Indie" });

  res.status(200).json(songs);
};

const seventiesSongs = async (req, res) => {
  const songs = await Song.find({ genre: "1970s" });

  res.status(200).json(songs);
};

const eightiesSongs = async (req, res) => {
  const songs = await Song.find({ genre: "1980s" });

  res.status(200).json(songs);
};

const ninetiesSongs = async (req, res) => {
  const songs = await Song.find({ genre: "1990s" });

  res.status(200).json(songs);
};

const twothousandsSongs = async (req, res) => {
  const songs = await Song.find({ genre: "2000s" });

  res.status(200).json(songs);
};

const twentytenSongs = async (req, res) => {
  const songs = await Song.find({ genre: "2010s" });

  res.status(200).json(songs);
};

const twentytwentySongs = async (req, res) => {
  const songs = await Song.find({ genre: "2020s" });

  res.status(200).json(songs);
};

module.exports = {
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
};
