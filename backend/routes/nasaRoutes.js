const express = require("express"); 
const { getAPOD } = require("../controllers/nasaApodController");
const {getMarsWeather} = require("../controllers/nasaMarsWeatherController")
const {getAsteroids} = require("../controllers/nasaAsteroidsController")
const {getMarsPhotos} = require("../controllers/nasaMarsPhotosController"); 

const router = express.Router(); 

// GET APOD Route
router.get("/apod", getAPOD); 

// Mars
router.get("/mars-weather", getMarsWeather); 
router.get("/mars-photos", getMarsPhotos); 

// Asteroids
router.get("/asteroids", getAsteroids); 

module.exports = router; 