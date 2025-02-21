const express = require("express"); 
const { getAPOD } = require("../controllers/nasaApodController");
const { getEarth } = require("../controllers/nasaEarthController"); 
const {getMarsWeather} = require("../controllers/nasaMarsWeatherController")
const {getAsteroids} = require("../controllers/nasaAsteroidsController")
const {getMarsPhotos} = require("../controllers/nasaMarsPhotosController"); 

const router = express.Router(); 

// GET APOD Route
router.get("/apod", getAPOD); 

// Earth
router.get("/earth", getEarth); 

// Mars
router.get("/mars-weather", getMarsWeather); 
router.get("/mars-photos", getMarsPhotos); 

// Asteroids
router.get("/asteroids", getAsteroids); 

module.exports = router; 