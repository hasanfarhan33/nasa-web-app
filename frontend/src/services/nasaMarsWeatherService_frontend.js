import axios from "axios";

// Fetching the information 
const fetchMarsWeather = async() => {
    try {

        const backendUrl = process.env.BACKEND_URL; 
        const endpoint = process.env.MARS_WEATHER_ENDPOINT; 

        const response = await axios.get(backendUrl + endpoint); 
        console.log("Fetched weather data:", response.data)
        return response.data; 
    } catch (error) {
        console.error("File name: nasaMarsWeatherService_frontend.js --> Error fetch mars weather info", error.message); 
        return null; 
    }
    
}

export default fetchMarsWeather; 