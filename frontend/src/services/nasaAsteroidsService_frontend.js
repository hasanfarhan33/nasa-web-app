import axios from "axios";

const fetchAsteroids = async(startDate, endDate) => {
    try {
        const params = {
            start_date: startDate, 
            end_date: endDate
        }
        const backendUrl = process.env.BACKEND_URL; 
        const endpoint = process.env.ASTEROIDS_ENDPOINT; 

        const response = await axios.get(backendUrl + endpoint, { params }); 
        return response.data; 

    } catch (error) {
        console.error("File name: nasaAsteroidsService_frontend.js --> Could not fetch asteroids info"); 
        return null; 
    }
}

export default fetchAsteroids; 