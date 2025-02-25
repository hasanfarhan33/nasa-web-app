import axios from 'axios'; 

const fetchMarsPhotos = async(sol, camera) => {
    try {
        const params = {
            sol: sol, 
            camera: camera !== "all" ? camera: undefined
        }; 
        
        // Removing undefined parameters before sending the request
        Object.keys(params).forEach(key => params[key] === undefined && delete params[key]); 

        const backendUrl = process.env.BACKEND_URL; 
        const endpoint = process.env.MARS_PHOTOS_ENDPOINT; 

        const requestUrl = backendUrl + endpoint; 

        console.log(requestUrl); 

        const response = await axios.get("https://web-production-5cd4.up.railway.app/api/nasa/mars-photos", {params})
        // const response = await axios.get(requestUrl, { params }); 
        return response.data; 

    } catch (error) {
        console.error("File name: nasaMarsPhotosService_frontend.js --> Could not fetch the photos"); 
        return null; 
    }
}

export default fetchMarsPhotos; 