const axios = require('axios'); 

const NASA_API_KEY = process.env.NASA_API_KEY; 
const  ASTEROIDS_URL = "https://api.nasa.gov/neo/rest/v1/feed"; 

const fetchAsteroids = async(startDate, endDate = null) => {
    try {
        const params = {
            api_key: NASA_API_KEY, 
            start_date: startDate,
        };

        if (endDate) {
            params.end_date = endDate;
        }

        console.log("Start Date:", startDate, "End Date:", endDate); 

        const response = await axios.get(ASTEROIDS_URL, { params }); 

        return response.data; 
    } catch (error) {
        console.log("File name: nasaAsteroidsService_backend.js --> Could not get asteroids info", error.message); 
        throw new Error("Could not get asteroids info"); 
        
    }
}

module.exports = {fetchAsteroids}; 