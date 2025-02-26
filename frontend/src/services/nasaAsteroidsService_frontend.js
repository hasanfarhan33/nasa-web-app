import axios from "axios";

const fetchAsteroids = async(startDate, endDate) => {
    try {
        const params = {
            start_date: startDate, 
            end_date: endDate
        }

        const response = await axios.get(process.env.BACKEND_URL + process.env.ASTEROIDS_ENDPOINT, { params }); 
        return response.data; 

    } catch (error) {
        console.error("File name: nasaAsteroidsService_frontend.js --> Could not fetch asteroids info"); 
        return null; 
    }
}

export default fetchAsteroids; 