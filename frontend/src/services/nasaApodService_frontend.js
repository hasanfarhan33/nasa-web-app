import axios from 'axios'; 
 

// Fetching the information 
const fetchAPOD = async() => {
    try {
        // Enter the backend endpoint here
        const response = await axios.get("http://localhost:9000/api/nasa/apod");
        return response.data; 
    } catch (error) {
        console.error("File name: nasaApodService_frontend.js --> Error fetching APOD: ", error); 
        return null; 
    }
}; 

export default fetchAPOD; 