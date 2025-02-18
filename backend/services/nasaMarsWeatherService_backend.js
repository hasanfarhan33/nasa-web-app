const axios = require('axios'); 

const NASA_API_KEY = process.env.NASA_API_KEY; 
const MARS_WEATHER_URL = "https://api.nasa.gov/insight_weather/"; 

const fetchMarsWeather = async() => {
    try {
        const response = await axios.get(MARS_WEATHER_URL, {
            params: {
                api_key: NASA_API_KEY, 
                feedtype: "json", 
            }
        })

        return response.data; 

    } catch (error) {
        console.log("File name: nasaMarsWeatherService.js --> Could not get mars weather info"); 
        throw new Error("Could not get mars weather info"); 
    }
}

module.exports = {fetchMarsWeather}