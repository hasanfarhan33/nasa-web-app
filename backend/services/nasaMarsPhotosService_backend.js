const axios = require('axios'); 

const NASA_API_KEY = process.env.NASA_API_KEY; 
const MARS_PHOTOS_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos"; 

const fetchMarsPhotos = async(sol, camera, page) => {
    try {

        const params = {
            api_key: NASA_API_KEY, 
            sol: sol, 
            page: page
        }; 

        if (camera !== "all") {
            params.camera = camera;
        }

        const response = await axios.get(MARS_PHOTOS_URL, {params}); 

        return response.data; 
    } catch(error) {
        console.error("File name: nasaMarsPhotosService_backend.js --> Could not fetch mars photos"); 
        throw new Error("Failed to fetch mars photos"); 
    }
}

module.exports = {fetchMarsPhotos}; 