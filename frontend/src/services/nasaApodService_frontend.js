import axios from 'axios'; 
 

// Fetching the information 
const fetchAPOD = async() => {
    try {
        // Enter the backend endpoint here
        const backendUrl = process.env.BACKEND_URL; 
        const endpoint = process.env.APOD_ENDPOINT; 

        const requestUrl = backendUrl + endpoint; 

        console.log(requestUrl); 

        const response = await axios.get(requestUrl);
        return response.data; 
    } catch (error) {
        console.error("File name: nasaApodService_frontend.js --> Error fetching APOD: ", error); 
        return null; 
    }
}; 

export default fetchAPOD; 