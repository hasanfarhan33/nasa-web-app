import axios from "axios";

const fetchAsteroids = async(startDate, endDate) => {
    try {
        const params = {
            start_date: startDate, 
            end_date: endDate
        }
        const backendUrl = process.env.BACKEND_URL; 
        const endpoint = process.env.ASTEROIDS_ENDPOINT; 
        
        const requestUrl = backendUrl + endpoint; 

        console.log(requestUrl); 

        const response = await axios.get("https://web-production-5cd4.up.railway.app/api/nasa/asteroids"); 
        // const response = await axios.get(requestUrl, { params }); 
        return response.data; 

    } catch (error) {
        console.error("File name: nasaAsteroidsService_frontend.js --> Could not fetch asteroids info"); 
        return null; 
    }
}

export default fetchAsteroids; 