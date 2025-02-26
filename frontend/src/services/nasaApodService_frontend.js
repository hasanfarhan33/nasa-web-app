import axios from 'axios'; 
 

// Fetching the information 
const fetchAPOD = async() => {
    try {
        // Enter the backend endpoint here
        const backendUrl = process.env.BACKEND_URL; 
        const endpoint = process.env.APOD_ENDPOINT; 
        const response = await axios.get(backendUrl + endpoint);
        return response.data; 
    } catch (error) {
        console.error("File name: nasaApodService_frontend.js --> Error fetching APOD: ", error); 
        return null; 
    }
}; 

export default fetchAPOD; 