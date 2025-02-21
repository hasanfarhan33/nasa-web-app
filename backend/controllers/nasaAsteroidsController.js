const {fetchAsteroids} = require("../services/nasaAsteroidsService_backend"); 

const getAsteroids = async(req, res) => {    
    try {
        // These variables should be equal 
        const {start_date, end_date = null} = req.query;

        // Check if the parameters are avaiable
        if(!start_date) {
            return res.status(400).json({error: "Missing required parameter -> Start Date (YYYY-MM-DD)"})
        } 

        const data = await fetchAsteroids(start_date, end_date); 
        res.json(data); 
    } catch (error) {
        console.error("File name: nasaAsteroidController.js --> could not get asteroids info", error.message)
        res.status(500).json({error: "Could not get asteroids info"}); 
    }
}

module.exports = {getAsteroids}; 