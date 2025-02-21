const {fetchEarth} = require("../services/nasaEarthService_backend"); 


// TODO: COME BACK TO THIS LATER
const getEarth = async(req, res) => {
    try {

        const {lat, lon, date} = req.query; 

        // If invalid range 
        if(lat < -90 || lat > 90 || lon < -180 || lon > 180) {
            return res.status(400).json({error: "Invalid longitude or latitude --> Lat range should be between -90 and 90. Lon range should be between -180 and 180"})
        }

        // Date is optional 
        const currentDate = date || new Date().toISOString().split("T")[0]; 

        if(!lat || !lon) {
            return res.status(400).json({error: "Missing required parameters lat, lon"}); 
        }

        const data = await fetchEarth(lat, lon, currentDate); 

        if (data && data.url) {
            res.json({imageUrl: data.url}); 
        }
        else {
            res.status(404).json({error: "Image URL not found"}); 
        }

    } catch (error) {
        console.error("File name: nasaEarthController.js --> Error getting NASA Earth images"); 
        res.status(500).json({error: "Error getting NASA Earth image"}); 
        
    }
}

module.exports = {getEarth}