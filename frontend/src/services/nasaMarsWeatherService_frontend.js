import axios from "axios";

// Fetching the information 
const fetchMarsWeather = async() => {
    try {
        const response = await axios.get("http://localhost:9000/api/nasa/mars-weather"); 
        console.log("Fetched weather data:", response.data)
        return response.data; 
    } catch (error) {
        console.error("File name: nasaMarsWeatherService_frontend.js --> Error fetch mars weather info", error.message); 
        return null; 
    }
    
}

export default fetchMarsWeather; 