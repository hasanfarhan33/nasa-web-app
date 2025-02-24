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

        const elementCount = data.element_count; 
        const asteroidsByDate = {}; 

        // Looping through all dates in the response 
        for (let date in data.near_earth_objects) {
            asteroidsByDate[date] = data.near_earth_objects[date].map(asteroid => ({
                name: asteroid.name, 
                miss_distance_km: parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers), 
                estimated_diameter_min_m: parseFloat(asteroid.estimated_diameter.meters.estimated_diameter_min), 
                estimated_diameter_max_m: parseFloat(asteroid.estimated_diameter.meters.estimated_diameter_max)
            }))
        }

        res.json({
            element_count: elementCount, 
            asteroids_by_date: asteroidsByDate
        }); 
    } catch (error) {
        console.error("File name: nasaAsteroidController.js --> could not get asteroids info", error.message)
        res.status(500).json({error: "Could not get asteroids info"}); 
    }
}

module.exports = {getAsteroids}; 