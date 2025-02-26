import axios from 'axios'; 
 

// Fetching the information 
const fetchAPOD = async() => {
    try {
        // Enter the backend endpoint here
        const backendUrl = process.env.BACKEND_URL; 
        const endpoint = process.env.APOD_ENDPOINT; 

        const requestUrl = backendUrl + endpoint; 

        console.log(requestUrl); 

        // const response = await axios.get(requestUrl);

        // Hardcoding URL because for some reason the env file isn't working properly
        const response = await axios.get("https://web-production-5cd4.up.railway.app/api/nasa/apod");
         
        return response.data; 
    } catch (error) {
        console.error("File name: nasaApodService_frontend.js --> Error fetching APOD: ", error); 
        return null; 
    }
}; 

export default fetchAPOD; 