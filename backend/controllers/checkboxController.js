const Song = require("../models/songModel");
const mongoose = require("mongoose");

const rockSongs =  await Song.find({genre: "Rock"}).exec();

const hiphopSongs = await Song.find( { genre: "Hip Hop" }).exec();

const popSongs = await Song.find( { genre: "Pop" }).exec();

const punkSongs = await Song.find({ genre: "Punk" }).exec();

const metalSongs = await Song.find({ genre: "Metal" }).exec();

const classicalSongs = await Song.find({ genre: "Classical" }).exec();

const electronicSongs = await Song.find({ genre: "Electronic" }).exec();

const reggaetonSongs = await Song.find({ genre: "Reggaeton" }).exec();

const indieSongs = await Song.find({ genre: "Indie" }).exec();

const seventiesSongs = await Song.find({ genre: "70s" }).exec();

const eightiesSongs = await Song.find({ genre: "80s" }).exec();

const ninetiesSongs = await Song.find({ genre: "90s" }).exec();

const twothousandsSongs = await Song.find({ genre: "2000s" }).exec();

const twentytenSongs = await Song.find({ genre: "2010s" }).exec();

const twentytwentySongs = await Song.find({ genre: "2020s" }).exec();

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
  twentytwentySongs
}