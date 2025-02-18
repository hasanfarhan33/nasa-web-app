const axios = require('axios')

const NASA_API_KEY = process.env.NASA_API_KEY; 
const EARTH_URL = "https://api.nasa.gov/planetary/earth/imagery"; 


// TODO: COME BACK TO THIS LATER. 
const fetchEarth = async(lat, lon, date) => {
    try {
        const response = await axios.get(EARTH_URL, {
            params: {
                api_key: NASA_API_KEY, 
                lat: lat, 
                lon: lon, 
                date: date,
            }
        }); 

        return response.data; 

    } catch (error) {
        console.log("File name: nasaEarthService_backend.js --> Error fetch NASA Earth Image"); 
        throw new Error("Failed to fetch NASA Earth image"); 
    }
}

module.exports = {fetchEarth}; 