const express = require("express"); 
const { getAPOD } = require("../controllers/nasaApodController");
const { getEarth } = require("../controllers/nasaEarthController"); 
const {getMarsWeather} = require("../controllers/nasaMarsWeatherController")

const router = express.Router(); 

// GET APOD Route
router.get("/apod", getAPOD); 
router.get("/earth", getEarth)
router.get("/mars-weather", getMarsWeather); 

module.exports = router; 