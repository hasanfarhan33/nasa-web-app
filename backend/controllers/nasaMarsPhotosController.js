const {fetchMarsPhotos} = require("../services/nasaMarsPhotosService_backend"); 

const getMarsPhotos = async (req, res) => {
    try {
        const {sol, camera="all", page=1} = req.query;

        // If sol isn't provided 
        if (!sol) {
            return res.status(400).json({error: "Missing required parameter -> Sol"}); 
        }

        console.log("Incoming Request: Sol =", sol, "Camera =", camera, "Page =", page); 

        // If the camera is invalid 
        const validCameras = ["FHAZ", "RHAZ", "MAST", "CHEMCAM", "MAHLI", "MARDI", "NAVCAM", "PANCAM", "MINITES"]; 
        if (camera !== "all" && !validCameras.includes(camera.toUpperCase())) {
                console.log("Camera:", camera)
                console.log("Sol:", sol)
                console.log("Page:", page)

                return res.status(400).json({
                    error: "Please enter the correct camera format. Here are the following camera formats.", 
                    camera_formats: validCameras
                }); 
            }
        
        // Make a request 
        const data = await fetchMarsPhotos(sol, camera, page); 
        res.json(data); 

    } catch(error) {
        console.error("File name: nasaMarsPhotosController.js --> Could not get mars photos", error.message); 
        res.status(500).json({error: "Could not get mars photos."})
    }
}

module.exports = {getMarsPhotos}