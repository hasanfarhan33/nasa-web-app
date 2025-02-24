import axios from "axios";

const fetchAsteroids = async(startDate, endDate) => {
    try {
        const params = {
            start_date: startDate, 
            end_date: endDate
        }

        const response = await axios.get("http://localhost:9000/api/nasa/asteroids", { params }); 
        return response.data; 

    } catch (error) {
        console.error("File name: nasaAsteroidsService_frontend.js --> Could not fetch asteroids info"); 
        return null; 
    }
}

export default fetchAsteroids; 