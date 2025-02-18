const { fetchAPOD } = require("../services/nasaApodService_backend"); 


// TODO: Remember to keep in mind whether the APOD is an image or a video 
const getAPOD = async(req, res) => {
    try {
        const data = await fetchAPOD(); 

        const processedData = {
            "title": data.title, 
            "media_type": data.media_type, 
            "url": data.url, 
            "date": data.date,  
        }; 

        res.json(processedData); 
        // res.json(data);
    } catch (error) {
        console.log("File name: apodNASAController.js --> Error fetching NASA APOD data"); 
        res.status(500).json({error: "Error fetching NASA APOD data"}); 
    }
}; 

module.exports = {getAPOD}; 