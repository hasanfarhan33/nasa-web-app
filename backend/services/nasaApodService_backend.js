const axios = require("axios")

const NASA_API_KEY = process.env.NASA_API_KEY; 
const APOD_URL = "https://api.nasa.gov/planetary/apod"; 

// console.log("NASA API KEY: ", process.env.NASA_API_KEY); 

const fetchAPOD = async() => {
    try {
        const response = await axios.get(APOD_URL, {
            params: {
                api_key: NASA_API_KEY
            }
        }); 

        return response.data; 

    } catch (error) {
        console.log("File name: nasaAPODServis.js --> Error fetching NASA APOD data: ", error.message); 
        throw new Error("Failed to fetch NASA APOD data"); 
    }
}

module.exports = {fetchAPOD}; 

